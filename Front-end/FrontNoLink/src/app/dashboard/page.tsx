"use client";
import React, { useState, memo } from 'react';
import Avatar from '@mui/material/Avatar';
import { BarChart, Bar, ResponsiveContainer, Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Cell, PieChart, Pie, Sector, RadialBarChart, RadialBar } from 'recharts';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PsychologyIcon from '@mui/icons-material/Psychology';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SwitchAccessShortcutIcon from '@mui/icons-material/SwitchAccessShortcut';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import CircleIcon from '@mui/icons-material/Circle';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import SsidChartIcon from '@mui/icons-material/SsidChart';
import { useRouter} from "next/navigation";
import AvatarImage from "@/app/assets/avatar.jpg"

const data1 = [
  { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
];

const Pasos = React.memo(() => (
  <ResponsiveContainer width="100%" height={80}>
    <BarChart width={20} height={40} data={data1}>
      <Bar dataKey="uv" radius={[2, 2, 2, 2]}>
        {data1.map((entry, index) => (
          <Cell
            key={`cell-${index}`}
            fill={index === data1.length - 1 ? "#f97316" : "#6b7280"}
          />
        ))}
      </Bar>
    </BarChart>
  </ResponsiveContainer>
));

(Pasos as any).demoUrl = 'https://codesandbox.io/p/sandbox/tiny-bar-chart-xzyy8g';

const data2= [
  { subject: 'Math', A: 120, B: 110, fullMark: 150 },
  { subject: 'Chinese', A: 98, B: 130, fullMark: 150 },
  { subject: 'English', A: 86, B: 130, fullMark: 150 },
  { subject: 'Geography', A: 99, B: 100, fullMark: 150 },
  { subject: 'Physics', A: 85, B: 90, fullMark: 150 },
  { subject: 'History', A: 65, B: 85, fullMark: 150 },
];

const EstadoAnimo = React.memo(() => (
  <ResponsiveContainer width="100%" height={112}>
    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data2}>
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" tick={false}/>
      <PolarRadiusAxis tick={false}/>
      <Radar dataKey="A" stroke="#8884d8" fill="#10b981" fillOpacity={0.6} />
    </RadarChart>
  </ResponsiveContainer>
));

// Agregar la propiedad demoUrl para referencia
(EstadoAnimo as any).demoUrl = 'https://codesandbox.io/p/sandbox/simple-radar-chart-2p5sxm';

const data3 = [
  { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
];

const PasosLine = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data3} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
        <Line type="monotone" dataKey="pv" stroke="#6b7280" strokeWidth={2} dot={false}/>
        <Line type="monotone" dataKey="uv" stroke="#f97316" strokeWidth={2} dot={false}/>
      </LineChart>
    </ResponsiveContainer>
  );
};

// Asignar demoUrl para referencia
(PasosLine as any).demoUrl = 'https://codesandbox.io/p/sandbox/tiny-line-chart-5f5vq6';

const data4 = [
  { name: 'A', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'B', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'C', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'D', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'E', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'F', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'G', uv: 3490, pv: 4300, amt: 2100 },
];

const PasosBar = React.memo(() => (
  <ResponsiveContainer width="100%" height={250}>
    <BarChart
      data={data4}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
      barSize={20}
    >
      <Tooltip />
      <Bar dataKey="pv" fill="#6b7280" radius={[4, 4, 4, 4]}/>
    </BarChart>
  </ResponsiveContainer>
));

(PasosBar as any).demoUrl = 'https://codesandbox.io/p/sandbox/bar-chart-has-no-padding-2hlnt8';




// Función para generar una posición aleatoria
const getRandomPosition = () => ({
  top: `${Math.random() * 90}%`, // Posición aleatoria de 0% a 90%
  left: `${Math.random() * 90}%`, // Posición aleatoria de 0% a 90%
});


// Datos del gráfico
const data = [
  { name: '18-24', uv: 31.47, pv: 2400, fill: '#f97316' },
  { name: '25-29', uv: 26.69, pv: 4567, fill: '#6b7280' },
  { name: '30-34', uv: 15.69, pv: 1398, fill: '#a855f7' },
  { name: '35-39', uv: 8.22, pv: 9800, fill: '#10b981' },
  { name: '40-49', uv: 8.63, pv: 3908, fill: '#14b8a6' },
  { name: '50+', uv: 2.63, pv: 4800, fill: '#d97706' },
  { name: 'Unknown', uv: 6.67, pv: 4800, fill: '#facc15' },
];

// Componente optimizado usando React.memo
const GraficaRadialBar = memo(() => {
  return (
    <ResponsiveContainer width="100%" height={100}>
      <RadialBarChart
        cx="50%"
        cy="50%"
        innerRadius="10%"
        outerRadius="80%"
        barSize={10}
        data={data}
      >
        <RadialBar
          {...({
            minAngle: 15,
            clockWise: true,
            dataKey: "uv",
            cornerRadius: 5,
            label: false,
          } as any)}
        />
      </RadialBarChart>
    </ResponsiveContainer>
  );
});

export default function Home() {
  const router = useRouter();
  return (
    <main className='relative w-full min-h-screen flex justify-center items-center'>

        <div className="absolute inset-0 w-full h-full -z-10">
        {[...Array(7)].map((_, index) => (
          <div
            key={index}
            className="absolute w-64 h-64 rounded-full bg-gradient-to-r from-[#c33764] to-[#1d2671] opacity-40 blur-3xl"
            style={getRandomPosition()}
          />
        ))}
      </div>


      <div className='lg:w-2/5 flex flex-col gap-4 m-2'>
        <div className='flex flex-row justify-between items-center'>
          <h1 className='font-extrabold text-4xl'>Resumen</h1>
          <div onClick={()=>{router.push("/user-info");}}>
            <Avatar alt="Remy Sharp" src={AvatarImage.src} sx={{ width: 56, height: 56 }} />
          </div>
        </div>
        <div className='flex flex-col gap-4'>
          <div className='flex flex-row justify-between items-center'>
            <h1 className='font-bold text-2xl'>Datos anclados</h1>
            <p className='text-blue-500 text-lg'>Editar</p>
          </div>
          <div className='flex flex-col gap-4'>
            <div className='flex flex-row justify-between gap-4 bg-gray-700 bg-opacity-20 rounded-2xl p-4 border border-gray-500 border-opacity-40'>
              <div className='flex flex-row gap-2'>
                <SsidChartIcon style={{color: "purple", fontWeight: "bold"}}/>
                <h1 className='font-bold'>Analisis</h1>
              </div>
              <div onClick={()=>{router.push("/analisis");}}>
                <KeyboardArrowRightIcon style={{ color: "#6b7280" }}/>
              </div>
            </div>
            <div className='flex flex-col gap-4 bg-gray-700 bg-opacity-20 rounded-2xl p-4 border border-gray-500 border-opacity-40'>
              <div className='flex flex-row justify-between items-center'>
                <div className='flex flex-row gap-2'>
                  <WhatshotIcon style={{ color: "#f97316" }}/>
                  <h1 className='font-bold text-orange-500'>Pasos</h1>
                </div>
                <div className='flex flex-row gap-2'>
                  <p className='text-gray-500'>3:17p.m.</p>
                  <KeyboardArrowRightIcon style={{ color: "#6b7280" }}/>
                </div>
              </div>
              <div className='flex flex-row justify-between items-baseline gap-1'>
                <div className='flex flex-row items-baseline'>
                  <p className='font-black text-3xl'>8,170</p>
                  <p className='text-gray-500'>pasos</p>
                </div>
                <div className='w-20'>
                  <Pasos/>
                </div>
              </div>
            </div>
            <div className='flex flex-col gap-4 bg-gray-700 bg-opacity-20 rounded-2xl p-4 border border-gray-500 border-opacity-40 backdrop-blur-sm'>
              <div className='flex flex-row justify-between'>
                <div className='flex flex-row gap-2'>
                  <PsychologyIcon style={{ color: "#10b981" }}/>
                  <h1 className='text-emerald-500 font-bold'>Estado de Animo</h1>
                </div>
                <div className='flex flex-row gap-2'>
                  <p className='text-gray-500'>12:49p.m.</p>
                  <KeyboardArrowRightIcon style={{ color: "#6b7280" }}/>
                </div>
              </div>
              <div className='flex flex-row justify-between items-end'>
                <div className='flex flex-col'>
                  <p className='font-bold text-lg'>Un dia muy agradable</p>
                  <p className='text-gray-500'>Alegría y gratitud - Sucesos</p>
                  <p className='text-gray-500'>actuales y comunidad</p>
                </div>
                <div className='w-28'>
                  <EstadoAnimo/>
                </div>
              </div>
            </div>
            <div className='bg-gray-700 bg-opacity-20 rounded-2xl p-4 flex flex-row gap-4 items-center justify-between  border border-gray-500 border-opacity-40'>
              <div className='flex flex-row gap-2 items-center'>
                <div className='bg-white w-7 h-7 rounded-lg flex flex-row justify-end p-1'>
                  <FavoriteIcon style={{ color: "red", fontSize: 12}}/>
                </div>
                <h1 className='font-bold'>Mostrar todos los datos</h1>
              </div>
              <KeyboardArrowRightIcon style={{ color: "#6b7280" }}/>
            </div>
          </div>
        </div>
        <div>
          <h1 className='font-bold text-2xl'>Tendecias</h1>
          <div className='flex flex-row justify-between bg-gray-700 bg-opacity-20 rounded-2xl p-4  border border-gray-500 border-opacity-40'>
            <div className='flex flex-row gap-4'>
              <SwitchAccessShortcutIcon style={{ color: "#3b82f6" }}/>
              <h1 className='font-bold'>Mostrar todas las tendencias de salud</h1>
            </div>
            <KeyboardArrowRightIcon style={{ color: "#6b7280" }}/>
          </div>
        </div>
        <div className='flex flex-col gap-4'>
          <h1 className='font-bold text-2xl'>Lo destacado</h1>
          <div className='flex flex-col gap-4 bg-gray-700 bg-opacity-20 rounded-2xl p-4  border border-gray-500 border-opacity-40'>
            <div>
              <div className='flex flex-row justify-between items-center'>
                <div className='flex flex-row gap-2 mb-2'>
                  <WhatshotIcon style={{ color: "#f97316" }}/>
                  <h1 className='font-bold text-orange-500'>Pasos</h1>
                </div>
                <KeyboardArrowRightIcon style={{ color: "#6b7280" }}/>
              </div>
              <div>
                <p className='font-bold'>Has dado más pasos de los que<br/>llevarías a esat hora.</p>
              </div>
              <div className='bg-white w-full h-0.5 rounded-lg opacity-20 my-2'></div>
              <div className='flex flex-row justify-between'>
                <div className='flex flex-col gap-1'>
                  <div className='flex flex-row gap-0.5 items-center'>
                    <CircleIcon style={{ color: "#f97316", fontSize: 10}}/>
                    <p className='font-bold text-orange-500 text-xs'>Hoy</p>
                  </div>
                  <div className='flex flex-row items-end'>
                    <p className='font-bold text-orange-500 text-2xl'>6,830</p>
                    <p className='font-bold text-orange-500'>pasos</p>
                  </div>
                </div>
                <div className='flex flex-col gap-1'>
                  <div className='flex flex-row gap-0.5 items-center'>
                    <CircleIcon style={{ color: "#6b7280", fontSize: 10}}/>
                    <p className='font-bold text-gray-500 text-xs'>Promedio</p>
                  </div>
                  <div className='flex flex-row items-end'>
                    <p className='font-bold text-gray-500 text-2xl'>8,170</p>
                    <p className='font-bold text-gray-500'>pasos</p>
                  </div>
                </div>
              </div>
              <PasosLine/>
            </div>
          </div>
          <div className='flex flex-col gap-4 bg-gray-700 bg-opacity-20 rounded-2xl p-4 h-96  border border-gray-500 border-opacity-40'>
            <div>
              <div className='flex flex-row justify-between items-center'>
                <div className='flex flex-row gap-2 mb-2'>
                  <WhatshotIcon style={{ color: "#f97316" }}/>
                  <h1 className='font-bold text-orange-500'>Energía de actividad</h1>
                </div>
                <KeyboardArrowRightIcon style={{ color: "#6b7280" }}/>
              </div>
              <div>
                <div>
                  <p className='font-bold'>En los ultimos siete días, quemaste un promedio de 413 kilocalorías al día</p>
                </div>
                <div className='relative my-2'> {/* Cambiar a relative */}
                  <div className=' flex flex-row absolute left-1/2 inset-0 z-0 w-2/4'> {/* Asegúrate de que se extienda para ocupar el fondo */}
                    <PasosBar />
                  </div>
                  <div className="absolute w-full mt-10">
                    <p className='text-gray-500 my-2'>Kilocalorías<br/>promedio</p> 
                    <div className='bg-orange-500 h-1.5 w-full rounded-2xl z-10 top-0'></div> {/* Asegúrate de que esté delante */}
                    <div className='flex flex-row items-baseline z-10 my-2'> {/* Asegúrate de que esté delante */}
                      <p className='font-bold text-4xl'>413</p>
                      <p className='font-bold text-gray-500 text-base'>kcal</p>
                    </div>{/* Asegúrate de que esté delante */}
                  </div>
                </div>
              </div>
            </div>
          </div> 
          <div className='flex flex-row justify-between gap-4 bg-gray-700 bg-opacity-20 rounded-2xl p-4  border border-gray-500 border-opacity-40'>
            <div className='flex flex-row gap-2'>
              <AutoAwesomeIcon style={{color: "#eab308"}}/>
              <p className='font-bold text-ye'>Mostrar todo lo destacado</p>
            </div>
            <KeyboardArrowRightIcon style={{ color: "#6b7280" }}/>
          </div>
        </div>
        <div>
          <h1 className='font-bold text-2xl'>Articulos</h1>
        </div>
      </div>
    </main>
  );
}
