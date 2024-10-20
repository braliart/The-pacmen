import React from "react";
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import Avatar from '@mui/material/Avatar';
import AvatarImage from "@/app/assets/avatar.jpg"

// Función para generar una posición aleatoria
const getRandomPosition = () => ({
    top: `${Math.random() * 90}%`, // Posición aleatoria de 0% a 90%
    left: `${Math.random() * 90}%`, // Posición aleatoria de 0% a 90%
  });

export default function Page() {
  return (
    <main className='relative w-full min-h-screen flex justify-center items-center'>
        <div className="absolute inset-0 w-full h-full -z-10">
        {[...Array(7)].map((_, index) => (
        <div
            key={index}
            className="absolute w-64 h-64 rounded-full bg-gradient-to-r from-[#090979] to-[#00d4ff] opacity-40 blur-3xl"
            style={getRandomPosition()}
        />
        ))}
        </div>


        <div className='lg:w-2/5 flex flex-col gap-4 m-2'>
            <div className="flex lg:flex-row items-center gap-2">
                <Avatar alt="Remy Sharp" src={AvatarImage.src} sx={{ width: 56, height: 56 }} />
                <h1 className="font-black text-4xl">Hugo Ramirez Gonzales</h1>
            </div>
            <h1 className="font-bold">Información General</h1>
            <div className="bg-gray-700 bg-opacity-20 rounded-2xl p-4 border border-gray-500 border-opacity-40 flex flex-col gap-2">
                <div className="flex flex-row justify-between">
                    <p>Edad</p>
                    <p className="font-bold">34 años</p>
                </div>
                <div className="flex flex-row justify-between">
                    <p>Género</p>
                    <p className="font-bold">Masculino</p>
                </div>
                <div className="flex flex-row justify-between">
                    <p>Peso</p>
                    <p className="font-bold">82 kg</p>
                </div>
                <div className="flex flex-row justify-between">
                    <p>Estatura</p>
                    <p className="font-bold">1.75 m</p>
                </div>
                <div className="flex flex-row justify-between">
                    <p>IMC (Indice de Masa Corporal)</p>
                    <p className="font-bold">26.8 (Sobrepeso)</p>
                </div>
            </div>

            {/* Secciones del Análisis */}

            <div className="bg-gray-700 bg-opacity-20 rounded-2xl p-4 border border-gray-500 border-opacity-40 flex flex-col gap-2">
                <h1 className="text-purple-500 font-black">Análisis General</h1>
                <div className="h-0.5 w-full border-t text-x"></div>
                <p className=" text-sm text-gray-500 mb-4">
                    Los siguientes datos pueden recopilarse, pero no están asociados con
                    tu identidad:
                </p>
            </div>
            <div className="flex flex-col md:flex-row gap-4">
                <div className="bg-gray-700 bg-opacity-20 rounded-2xl p-4 border border-gray-500 border-opacity-40 flex flex-col gap-2 md:w-1/2">
                    <h1 className="text-blue-500 font-black">Historial Médico</h1>
                    <div className="h-0.5 w-full border-t text-x"></div>
                    <div className="flex flex-row justify-between">
                        <p>Enfermedades</p>
                        <p className="font-bold">Hipertensión</p>
                    </div>
                    <div className="flex flex-row justify-between">
                        <p>Cirugías previas</p>
                        <p className="font-bold">Apendicitis (28 años)</p>
                    </div>
                    <div className="flex flex-row justify-between">
                        <p>Alergias</p>
                        <p className="font-bold">Polen, Polvo</p>
                    </div>
                </div>
                <div className="bg-gray-700 bg-opacity-20 rounded-2xl p-4 border border-gray-500 border-opacity-40 flex flex-col gap-2 md:w-1/2">
                    <h1 className="text-emerald-500 font-black">Habitos</h1>
                    <div className="h-0.5 w-full border-t text-x"></div>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col">
                            <p className="font-bold">Alimentación</p>
                            <p className="text-gray-500">Dieta con frutas y verduras, pero alta en alimentos procesados</p>
                        </div>
                        <div className="flex flex-col">
                            <p className="font-bold">Estilo de vida</p>
                            <p className="text-gray-500">No fumador</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
  );
}