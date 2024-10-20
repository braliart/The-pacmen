import base64
import requests
from flask import Flask, request, jsonify
import json
import pymysql
from conexion_crud import *
import re
app = Flask(__name__)

def extraer_json(texto):
    # Usar una expresión regular para capturar el JSON entre <objeto> y </objeto>
    patron = r'<objeto>(.*?)</objeto>'
    
    # Buscar el contenido entre <objeto> y </objeto>
    resultado = re.search(patron, texto)
    
    if resultado:
        json_str = resultado.group(1)  # Extraer el contenido capturado
        try:
            # Cargar la cadena como JSON
            json_data = json.loads(json_str)
            return json_data
        except json.JSONDecodeError as e:
            print(f"Error al decodificar JSON: {e}")
            return None
    else:
        print("No se encontró JSON en el texto.")
        return None

# Función para unir dos descripciones, recibe dos diccionarios
def join_presc(presc1, presc2):
    # Unir las descripciones
    # Unir las descripciones clave por clave
    for key in presc2:
        if key in presc1:
            # Combinar listas si las claves ya existen
            presc1[key] += presc2[key]
        else:
            # Añadir nuevas claves
            presc1[key] = presc2[key]
    return presc1
# llamada a la API de LLaMa
def call_llama_api(data, llama_api_url_opt):
    # URL de la API de LLaMa 3.2
    llama_api_url = llama_api_url_opt
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
def call_llama_api_img(img, prompt):
    # URL de la API de LLaMa 3.2
    llama_api_url = 'https://qd3hoj0jwfszxx-80.proxy.runpod.net/process-image-encoded'
    files = {
        'file': img  # 'file' es la clave esperada por la API
    }
    try:
        # Hacer la llamada
        response = requests.post(llama_api_url, files=files, data=prompt)
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
    # URL de la API de LLaMa 3.2
    llama_api_url = 'https://qd3hoj0jwfszxx-80.proxy.runpod.net/process-image-encoded'
    # Obtener la imagen en HTML
    image_file = request.files['image']

    if image_file:
        # Guardar
        # Crear un prompt para la extracción de datos
        llama_payload = {
        "prompt": "Analyze the provided medical recipe and return only a JSON format containing the data of the recipe 'patient_name','doctor_name','doctor_license','address','date','prescription'. The prescription should be the remaining text. Dates should be in date data type. License should be int type. Make sure you return a JSON file and only a JSON file. Please, dont include any other thing in the response like the intro to the response. Include the json response in the following format json <response>"
        }
        # Llamar a la API de LLaMa
        llama_response = call_llama_api_img(image_file, llama_payload)
        # Salida de llama, transformación a json
        if llama_response:
            return jsonify(
                llama_response
            ), 200
        else:
            return jsonify({'error': 'Error calling LLaMa API'}), 500
        # To do: Añadir a la base de datos
    else:
        return jsonify({'error': 'No image provided'}), 400

# Ruta para la extracción de datos de la receta en texto
@app.route('/api/submit_recipe', methods=['POST'])
def submit_recipe():
    llama_api_url = 'https://98n1uj94w4mt4i-11434.proxy.runpod.net/api/generate'
    # Recibir el texto de la receta desde el cuerpo de la solicitud
    data = request.get_json()
    recipe_text = data.get('recipe_text')


    if recipe_text:
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
            connection = connect_to_mysql()

            # Acceder a los campos individuales
            patient_name = response_data.get('patient_name')
            doctor_name = response_data.get('doctor_name')
            doctor_license = response_data.get('doctor_license')
            address = response_data.get('address')
            date = response_data.get('date')
            prescription = response_data.get('prescription')

            insert_generic(connection, 'receta', jsonify({
                'id_paciente': patient_name,
                'doctor': doctor_name,
                'cedula_profesional': doctor_license,
                'direccion': address,
                'fecha': date,
                'diagnostico': prescription
            }))
            connection.close()

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
    llama_api_url = 'https://98n1uj94w4mt4i-11434.proxy.runpod.net/api/generate'
    prescription = request.get_json()
    id_receta1 = prescription.get('recipe_id')
    prescription_text = prescription.get('recipe_text')
    if prescription:
        # Crear un prompt para la extracción de datos 
        llama_payload = {
        "model": "llama3.2",
        "prompt": "Analyze the provided prescription and return only a text in a json format containing 'medications_commercial_name','medication_substance','dose','frequency','route_of_administration', 'end_date'. The dose should only include the size. The route of administration should indicate if it is oral, topical, etc. End date is the creation date plus the days of the medication with the most prescribed days, in a date data type.\n " + prescription_text,
        "stream": False
    }
        # Llamar a la API de LLaMa 3.2
        llama_response = call_llama_api(llama_payload, llama_api_url)
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

            connection = connect_to_mysql()

            insert_generic(connection, 'receta', jsonify({
                'id_receta': id_receta1,
                'nombre_comercial': medications_commercial_name,
                'nombre_sustancia': medication_substance,
                'dosis': dose,
                'frecuencia': frequency,
                'via_administracion': route_of_administration,
                'fecha_finalizacion': end_date
            }))
            connection.close()
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

    #URL de la API de LLaMa 3.2
    llama_api_url = 'https://98n1uj94w4mt4i-11434.proxy.runpod.net/api/generate'
    # Json de las descripciones, ejemplos
    descripcion1 = {"dose": ["10mg","20mg"],
                    "frequency": ["1 tablet every 12 hours for 3 days", "1 tablet once daily before bedtime for five days"],
                    "medication_substance": ["Lisinopril","Atorvastatin"],
                    "route_of_administration": ["oral", "oral"]}
    descripcion2 = {"dose": ["10mg","25mg"],
                    "frequency": ["1 tablet every 12 hours for 3 days", "2 tablets every 8 hours for 6 days"],
                    "medication_substance": ["Lisinopril","Topiramate"],
                    "route_of_administration": ["oral", "oral"]}
    # Unir las descripciones
    descripcion1 = join_presc(descripcion1, descripcion2)
    # Comparación
    if descripcion1:
        # Crear un prompt para la comparación de las descripciones
        #Quizas probar con varios prompts a la vez para obtener mejores respuestas
        llama_payload = {
            "model": "llama3.2",
            "prompt": (
                "Analize the provided description return only a text in a json format containing: 'contraindication', 'repetitions','Result'. Contradictions is a list of medications that can cause side effects if consumed together, or NULL if none. Repetitions is a list of repeated medications, or NULL if none. Result is a text describing the interaction between medications that can cause side effects, write 'no data' if there is none. \n"
                "Description: " + json.dumps(descripcion1) + "\n"
            ),
            "stream": False
        }

        # Llamar a la API de LLaMa 3.2
        llama_response = call_llama_api(llama_payload, llama_api_url)

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
