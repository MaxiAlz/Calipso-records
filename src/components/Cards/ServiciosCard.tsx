import React from 'react';
import { Link } from 'react-router';

interface ServicioProps {
  icono: React.ReactNode;
  titulo: string;
  subtitulo: string;
}
const ServiciosCard = ({ icono, subtitulo, titulo }: ServicioProps) => {
  return (
    <div className='bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-xl border border-primary hover:shadow-lg transition-shadow text-center'>
      <div className='text-primary mb-4 inline-flex justify-center'>
        {icono}
      </div>
      <h3 className='text-xl font-bold mb-3'>{titulo}</h3>
      <p className='text-gray-600 dark:text-gray-300 mb-6'>{subtitulo}</p>
      <Link
        to={`/servicios/${titulo}`}
        className='text-primary hover:text-primary/80 font-semibold transition-colors'
      >
        Saber más →
      </Link>
    </div>
  );
};

export  {ServiciosCard};
