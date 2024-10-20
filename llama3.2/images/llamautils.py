import argparse
import os
import sys
import requests
import torch
from accelerate import Accelerator
from PIL import Image as PIL_Image
from transformers import MllamaForConditionalGeneration, MllamaProcessor
from huggingface_hub import login
from io import BytesIO
import base64

login(token="<your_token_here>")

accelerator = Accelerator()
device = accelerator.device

# Constants
DEFAULT_MODEL = "meta-llama/Llama-3.2-11B-Vision-Instruct"
temperature=0.7
top_p=0.9

def load_model_and_processor(model_name: str):
    """
    Load the model and processor based on the 11B or 90B model.
    """
    model = MllamaForConditionalGeneration.from_pretrained(
        model_name,
        torch_dtype=torch.bfloat16,
        use_safetensors=True,
        device_map=device,
    )
    processor = MllamaProcessor.from_pretrained(model_name, use_safetensors=True)

    model, processor = accelerator.prepare(model, processor)
    return model, processor

def process_image(image_input: str):
    """
    Open and convert an image from the specified path, URL, or base64 string.
    """
    if image_input.startswith('http://') or image_input.startswith('https://'):
        response = requests.get(image_input)
        if response.status_code != 200:
            raise ValueError(f"Failed to fetch the image from URL '{image_input}'.")
        return PIL_Image.open(BytesIO(response.content)).convert("RGB")
    elif os.path.exists(image_input):
        with open(image_input, "rb") as f:
            return PIL_Image.open(f).convert("RGB")
    else:
        try:
            image_data = base64.b64decode(image_input)
            return PIL_Image.open(BytesIO(image_data)).convert("RGB")
        except (base64.binascii.Error, PIL_Image.UnidentifiedImageError):
            raise ValueError("Failed to decode base64 string or identify image format.")

async def convert_image_to_PIL(image):
    # Read the file contents
    contents = await image.read()
    image = PIL_Image.open(BytesIO(contents))
    return image


def generate_text_from_image(
    model, processor, image, prompt_text: str, temperature: float, top_p: float
):
    """
    Generate text from an image using the model and processor.
    """
    conversation = [
        {
            "role": "user",
            "content": [{"type": "image"}, {"type": "text", "text": prompt_text}],
        }
    ]
    prompt = processor.apply_chat_template(
        conversation, add_generation_prompt=True, tokenize=False
    )
    inputs = processor(image, prompt, return_tensors="pt").to(device)
    output = model.generate(
        **inputs, temperature=temperature, top_p=top_p, max_new_tokens=512
    )
    tmp = processor.decode(output[0])[len(prompt) :]
    tmp_cleaned = tmp.replace("end_header_id|>", "")
    tmp_cleaned2 = tmp_cleaned.replace("<|eot_id|>","")
    return tmp_cleaned2
