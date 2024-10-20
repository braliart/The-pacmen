"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCameraRetro } from "@fortawesome/free-solid-svg-icons";
import React, { useRef, useState } from "react";

export default function Page() {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [showInfo, setShowInfo] = useState<boolean>(false);
  const [simulate, setSimulate] = useState<boolean>(true);
  const [imagePreview, setImagePreview] = useState<string | null>(null); // Estado para la previsualización de la receta

  // Función para manejar la selección de la imagen
  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setLoading(true);
      setShowInfo(false); // Ocultar la información mientras se procesa

      // Generar la URL temporal para mostrar la previsualización
      const imageUrl = URL.createObjectURL(file);
      setImagePreview(imageUrl); // Guardar la URL para la previsualización

      if (simulate) {
        // Simula un retraso para mostrar la información
        setTimeout(() => {
          const simulatedResult = `
            Diagnóstico: Faringitis aguda, no especificada. Tratamiento recomendado:
            - Ibuprofeno cápsulas 600mg, 1 cada 8 hrs.
            - Cetirizina tabletas 10mg, 1 cada 12 hrs.
            - Cefuroxima tabletas 500mg, 1 cada 12 hrs.
            - Guaifenesina/Oxolamina jarabe, 10ml cada 8 hrs.
          `;
          setResult(simulatedResult);
          setLoading(false);
          setTimeout(() => {
            setShowInfo(true); // Mostrar la información tras un pequeño retraso
          }, 1000); // Simula un retraso antes de mostrar los resultados
        }, 7000); // Aumenta el tiempo de procesamiento a 7 segundos
      } else {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("prompt", "Describe la imagen en 50 palabras como máximo.");

        try {
          const response = await fetch("https://api-endpoint.com", { method: "POST", body: formData });
          if (response.ok) {
            const data = await response.json();
            setResult(data.result);
          } else {
            setResult("No se pudo procesar la imagen.");
          }
        } catch (error) {
          setResult("Error en la solicitud.");
        } finally {
          setLoading(false);
          setTimeout(() => {
            setShowInfo(true); // Mostrar la información tras un retraso simulado
          }, 1000);
        }
      }
    }
  };

  // Función para abrir el diálogo de selección de archivos
  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <main className="relative w-full min-h-screen flex flex-col justify-center items-center gap-4">
      <div className="absolute inset-0 w-full h-full -z-10">
        {[...Array(7)].map((_, index) => (
          <div
            key={index}
            className="absolute w-64 h-64 rounded-full bg-gradient-to-r from-[#22c1c3] to-[#fdbb2d] opacity-40 blur-3xl"
            style={{ top: `${Math.random() * 90}%`, left: `${Math.random() * 90}%` }}
          />
        ))}
      </div>

      <div className="lg:w-2/5 flex flex-col gap-4 m-2">
        <h1 className="font-black text-4xl">Análisis Personalizado</h1>
        <div className="bg-gray-700 bg-opacity-20 rounded-2xl p-4 border border-gray-500 border-opacity-40 flex flex-col gap-2 backdrop-blur-sm">
          <p className="font-bold">
            Recuerda que este es un análisis basado en tus recetas y los diagnósticos realizados. Para subir una nueva receta, puedes presionar el siguiente botón:
          </p>
          {/* Botón para cargar la imagen */}
          <div className="flex flex-row justify-between">
            <p className="text-gray-500 text-opacity-80">Recuerda actualizar constantemente tus recetas</p>
            <button
              onClick={handleButtonClick}
              className="flex items-center gap-3 px-4 bg-[#a855f7] border-[1px] border-slate-800 text-white font-semibold text-xs md:text-base lg:text-lg rounded-full shadow-lg hover:bg-[#6b21a8] transition-all duration-300"
            >
              <FontAwesomeIcon icon={faCameraRetro} height={15} style={{ color: "white" }} />
              <span className="min-w-max text-sm">Añadir receta</span>
            </button>
            {/* Input de archivo oculto */}
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={handleFileChange}
              style={{ display: "none" }}
            />
          </div>
        </div>

        {/* Mostrar la previsualización de la receta si se ha subido una imagen */}
        {imagePreview && (
          <div className="bg-gray-700 bg-opacity-20 rounded-2xl p-4 border border-gray-500 border-opacity-40 mt-4">
            <h2 className="font-black text-xl mb-2">Vista previa de la receta</h2>
            <div className="w-full h-64">
              <img
                src={imagePreview}
                alt="Previsualización de la receta"
                className="object-cover w-full h-full rounded-lg"
              />
            </div>
          </div>
        )}

        {/* Mostrar la información solo si se ha subido una imagen */}
        {loading ? (
          <div className="mt-4 text-white">Procesando la imagen...</div>
        ) : (
          showInfo && (
            <>
              {/* Mostrar resultado de la API o simulación */}
              <div className="bg-gray-700 bg-opacity-20 rounded-2xl p-4 border border-gray-500 border-opacity-40 mt-4">
                <h2 className="font-black text-xl mb-2">Resultado del análisis</h2>
                <p className="text-gray-300">{result}</p>
              </div>

              {/* Card para análisis general */}
              <div className="bg-gray-700 bg-opacity-20 rounded-2xl p-4 border border-gray-500 border-opacity-40 flex flex-col gap-2 mt-4">
                <h1 className="text-purple-500 font-black">Análisis General</h1>
                <div className="h-0.5 w-full border-t text-x"></div>
                <p className=" text-sm text-gray-500 mb-4">
                  Los siguientes datos pueden recopilarse, pero no están asociados con
                  tu identidad:
                </p>
                <p className="text-gray-300">
                  Diagnóstico: Faringitis aguda, no especificada. Tratamiento con ibuprofeno, cetirizina, cefuroxima y jarabe de guaifenesina/oxolamina.
                </p>
              </div>

              {/* Cards de recomendaciones y alternativas */}
              <div className="flex flex-col md:flex-row gap-4 mt-4">
                <div className="bg-gray-700 bg-opacity-20 rounded-2xl p-4 border border-gray-500 border-opacity-40 flex flex-col gap-2">
                  <h1 className="text-blue-500 font-black">Recomendaciones Específicas</h1>
                  <div className="h-0.5 w-full border-t text-x"></div>
                  <p className=" text-sm text-gray-500 mb-4">
                    Los siguientes datos pueden recopilarse, pero no están asociados con
                    tu identidad:
                  </p>
                  <p className="text-gray-300">
                    Medicamentos alternativos:
                    - Advil o Motrin (ibuprofeno).
                    - Zyrtec o Reactine (cetirizina).
                    - Ceftin o Zinnat (cefuroxima).
                    - Mucosolvan o Histalox (guaifenesina/oxolamina).
                  </p>
                </div>

                <div className="bg-gray-700 bg-opacity-20 rounded-2xl p-4 border border-gray-500 border-opacity-40 flex flex-col gap-2">
                  <h1 className="text-emerald-500 font-black">¿Ya intentaste con esto?</h1>
                  <div className="h-0.5 w-full border-t text-x"></div>
                  <p className=" text-sm text-gray-500 mb-4">
                    Los siguientes datos pueden recopilarse, pero no están asociados con
                    tu identidad:
                  </p>
                  <p className="text-gray-300">
                    Sugerencias naturales:
                    - Té de jengibre para molestias estomacales.
                    - Hidratación y té de manzanilla para la sequedad de boca.
                    - Vitamina B12 y frutas cítricas para mejorar el estado de alerta.
                    - Miel con limón para reducir la inflamación de garganta.
                  </p>
                </div>
              </div>
            </>
          )
        )}
      </div>
    </main>
  );
}
