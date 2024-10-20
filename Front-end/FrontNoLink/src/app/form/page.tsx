import React from 'react';
import BasicForm from '../../../Components/BasicForm';

// Definición del array de formularios con tipos correctos
const formsData: { id: number; fields: { label: string; type: 'text' | 'number' | 'select' | 'radio'; options?: string[] }[] }[] = [
  {
    id: 1,
    fields: [
      { label: 'Nombre Completo', type: 'text' },
      { label: 'Edad', type: 'number' },
      { label: 'Sexo', type: 'select', options: ['Masculino', 'Femenino', 'Otro'] },
    ],
  },
  {
    id: 2,
    fields: [
      { label: 'Consumo de tabaco', type: 'radio', options: ['Sí', 'No'] },
      { label: 'Consumo de alcohol', type: 'radio', options: ['Sí', 'No'] },
      { label: 'Actividad física', type: 'select', options: ['Nunca', 'Ocasional', 'Regular', 'Intensa'] },
    ],
  },
];

const App = () => {
  return <BasicForm forms={formsData} />;
};

export default App;
