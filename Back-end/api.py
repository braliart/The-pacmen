import base64
import requests
from flask import Flask, request, jsonify
import json

app = Flask(__name__)

# Almacenamiento temporal de recetas, imagenes
recipes = []
images = []
prescriptions = []

# llamada a la API de LLaMa
def call_llama_api(data):
    # URL de la API de LLaMa 3.2
    llama_api_url = 'https://98n1uj94w4mt4i-11434.proxy.runpod.net/api/generate'
    
    try:
        # Hacer la llamada
        response = requests.post(llama_api_url, json=data)

        # Suponemos que LLaMa responde en formato JSON con la estructura que se menciona
        if response.status_code == 200:
            return response.json()  # Devolver el JSON de la respuesta de LLaMa
        else:
            return {"error": "Error in LLaMa API call", "status_code": response.status_code}
    except Exception as e:
        return {"error": str(e)}

# Ruta para la extracción de datos de la receta en imagen
@app.route('/api/submit_image', methods=['POST'])
def submit_image():
    # Obtener la imagen en HTML (puedes recibirla como archivo o base64)
    image_file = request.files['image']
    # Convertir la imagen en base64
    image_base64 = base64.b64encode(image_file.read()).decode('utf-8')

    if image_base64:
        # Guardar
        images.append(image_base64)
        # Crear un prompt para extraer los datos de la receta (fecha, dr, prescripción, etc.)
        prompt = "Extract the following details from the provided image."

        # Llamar a la API de LLaMa
        llama_response = call_llama_api({'input': image_base64, 'prompt': prompt})
        # Salida de llama, transformación a json
        if llama_response:
            return jsonify({
                'medications': llama_response['medications'],
                'diagnosis': llama_response['diagnosis'],
                'side_effects': llama_response['side_effects']
            }), 200
        else:
            return jsonify({'error': 'Error calling LLaMa API'}), 500
        # To do: Añadir a la base de datos
    else:
        return jsonify({'error': 'No image provided'}), 400

# Ruta para la extracción de datos de la receta en texto
@app.route('/api/submit_recipe', methods=['POST'])
def submit_recipe():
    # Recibir el texto de la receta desde el cuerpo de la solicitud
    data = request.get_json()
    recipe_text = data.get('recipe_text')


    if recipe_text:
        # Almacenar la receta
        recipes.append(recipe_text)

        # Crear un prompt para la extracción de datos 
        llama_payload = {
        "model": "llama3.2",
        "prompt": "Analyze the provided medical recipe and return only a text in a json format containing the data of the recipe 'patient_name','doctor_name','doctor_license','address','date','prescription'. The prescription should be the remaining text. Dates should be in date data type. License should be int type. \n " + recipe_text,
        "stream": False
    }
        # Llamar a la API de LLaMa 3.2
        llama_response = call_llama_api(llama_payload)
        # Salida de llama, transformación a json
        if llama_response:
            # Convertir el campo 'response' de cadena JSON a un diccionario
            response_data = json.loads(llama_response['response'])

            # Acceder a los campos individuales
            patient_name = response_data.get('patient_name')
            doctor_name = response_data.get('doctor_name')
            doctor_license = response_data.get('doctor_license')
            address = response_data.get('address')
            date = response_data.get('date')
            prescription = response_data.get('prescription')

            # Añadir a la base

            #Base temporal
            prescriptions.append(prescription)

            return jsonify({
                'done': llama_response['done'],
                'done_reason': llama_response['done_reason'],
                'patient_name': patient_name,
                'doctor_name': doctor_name,
                'doctor_license': doctor_license,
                'address': address,
                'date': date,
                'prescription': prescription
            }), 200
        else:
            return jsonify({'error': 'Error calling LLaMa API'}), 500
    else:
        return jsonify({'error': 'No recipe text provided'}), 400

# Post Ruta para obtener los datos de la prescripción.
@app.route('/api/get_diagnosis', methods=['POST'])
def submit_diagnosis(): 
    prescription = request.get_json()
    prescription_text = prescription.get('recipe_text')
    if prescription:
        # Crear un prompt para la extracción de datos 
        llama_payload = {
        "model": "llama3.2",
        "prompt": "Analyze the provided prescription and return only a text in a json format containing 'medications_commercial_name','medication_substance','dose','frequency','route_of_administration', 'end_date'. The dose should only include the size. The route of administration should indicate if it is oral, topical, etc. End date is the creation date plus the days of the medication with the most prescribed days, in a date data type.\n " + prescription_text,
        "stream": False
    }
        # Llamar a la API de LLaMa 3.2
        llama_response = call_llama_api(llama_payload)
        # Salida de llama, transformación a json
        if llama_response:
            # Datos individuales
            response_data = json.loads(llama_response['response'])
            medications_commercial_name = response_data.get('medications_commercial_name')
            medication_substance = response_data.get('medication_substance')
            dose = response_data.get('dose')
            frequency = response_data.get('frequency')
            route_of_administration = response_data.get('route_of_administration')
            end_date = response_data.get('end_date')

            return jsonify({
                'done': llama_response['done'],
                'done_reason': llama_response['done_reason'],
                'medications_commercial_name': medications_commercial_name,
                'medication_substance': medication_substance,
                'dose': dose,
                'frequency': frequency,
                'route_of_administration': route_of_administration,
                'end_date': end_date
            }), 200
        else:
            return jsonify({'error': 'Error calling LLaMa API'}), 500

# Ruta para comparar dos descripciones
@app.route('/api/compare_descriptions', methods=['POST'])
def compare_descriptions():
    # Json de las descripciones, ejemplos
    descripcion1 = {"dose": ["10mg","20mg"],
                            "end_date": "2023-11-30",
                            "frequency": ["1 tablet every 12 hours for 3 days", "1 tablet once daily before bedtime for five days"],
                            "medication_substance": ["Lisinopril","Atorvastatin"],
                            "medications_commercial_name": ["Lisinopril (Zestril)", "Atorvastatin (Lipitor)"],
                            "route_of_administration": ["oral", "oral"]}
    descripcion2 = {"dose": ["10mg","25mg"],
                            "end_date": "2023-11-30",
                            "frequency": ["1 tablet every 12 hours for 3 days", "2 tablets every 8 hours for 6 days"],
                            "medication_substance": ["Lisinopril","Topiramate"],
                            "medications_commercial_name": ["Lisinopril (Zestril)", "Topiramate (Topamax)"],
                            "route_of_administration": ["oral", "oral"]}
    # Comparación
    if descripcion1 and descripcion2:
        # Crear un prompt para la comparación de las descripciones
        llama_payload = {
            "model": "llama3.2",
            "prompt": (
                "Analize the provided descriptions return only a text in a json format with the fields: 'contraindication', 'repetitions','Result'. Contradictions should be a list of medications in both descriptions that can cause contraindications, or NULL if none. Repetitions should be a list of repeated medications, or NULL if none. Result should be an explanation of the result. \n"
                "Description 1: " + json.dumps(descripcion1) + "\n"
                "Description 2: " + json.dumps(descripcion2)
            ),
            "stream": False
        }

        # Llamar a la API de LLaMa 3.2
        llama_response = call_llama_api(llama_payload)

        if llama_response:
            try:
                # Retornar la respuesta procesada
                return jsonify({
                    'done': llama_response['done'],
                    'done_reason': llama_response['done_reason'],
                    'response': llama_response['response']
                }), 200
            except json.JSONDecodeError:
                return jsonify({'error': 'Invalid JSON response from LLaMa'}), 500
        else:
            return jsonify({'error': 'Error calling LLaMa API'}), 500
    else:
        return jsonify({'error': 'Both descriptions are required'}), 400


@app.route('/api/test', methods=['POST'])
def test_post():
    # Datos a enviar a LLaMa 3.2
    llama_payload = {
        "model": "llama3.2",
        "prompt": "Give the side effects of using paracetamol and flucloxacillin",
        "stream": False
    }
    # Llamar a la API de LLaMa 3.2
    llama_response = call_llama_api(llama_payload)
    # Devolver la respuesta de LLaMa como respuesta de tu API
    return jsonify(llama_response), 200




# Iniciar la aplicación Flask
if __name__ == '__main__':
    app.run(debug=True)
