from fastapi import FastAPI, UploadFile, File, Form
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from pydantic import BaseModel
import llamautils

class ImageRequest(BaseModel):
    image_url: str
    query: str

model, processor = llamautils.load_model_and_processor(llamautils.DEFAULT_MODEL)
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows specified origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods (GET, POST, etc.)
    allow_headers=["*"],  # Allows all headers
)

@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.get("/test")
async def test():
    image_path="https://i0.wp.com/mundoitam.com/wp-content/uploads/2019/10/DSC_0072.jpg?resize=1200%2C686&ssl=1"
    image = llamautils.process_image(image_path)
    prompt_text="Describe the image in 50 words at most." 
    outputFromModel = llamautils.generate_text_from_image(model, processor, image, prompt_text, llamautils.temperature, llamautils.top_p)
    print(outputFromModel)
    return {"result": outputFromModel}

@app.post("/process-image-url")
async def process_image_url(request: ImageRequest):
    image_path = request.image_url
    image = llamautils.process_image(image_path)
    prompt_text=request.query 
    outputFromModel = llamautils.generate_text_from_image(model, processor, image, prompt_text, llamautils.temperature, llamautils.top_p)
    print(outputFromModel)
    return {"result": outputFromModel}

@app.post("/process-image-encoded")
async def process_image_encoded(
    file: UploadFile = File(),
    prompt: str = Form(),
):
    try:
        image = await llamautils.convert_image_to_PIL(file)
    except Exception as e:
        return JSONResponse(content={"error": "Invalid image file.", "internal":str(e) }, status_code=400)
    
    outputFromModel = llamautils.generate_text_from_image(model, processor, image, prompt, llamautils.temperature, llamautils.top_p)
    print(outputFromModel)
    return {"result": outputFromModel}
