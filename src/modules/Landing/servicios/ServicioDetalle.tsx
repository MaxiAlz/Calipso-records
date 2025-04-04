import { Link, useParams } from 'react-router';
import { HomeLayout } from '../../../layouts/HomeLayout';
import { servicios } from '../../../data/servicio';
import bgImagen from '.././../../assets/images/calipso-2.jpg';

const ServicioDetalle = () => {
  const { tituloServicio } = useParams();

  // Buscar el servicio en el array
  const servicio = servicios.find((s) => s.titulo === tituloServicio);

  if (!servicio) {
    return (
      <HomeLayout pageTitle='Servicio no encontrado'>
        <div className='flex items-center justify-center h-screen text-center'>
          <h2 className='text-2xl font-bold text-gray-600 dark:text-gray-300'>
            Servicio no encontrado 😕
          </h2>
        </div>
      </HomeLayout>
    );
  }
  return (
    <HomeLayout pageTitle={tituloServicio}>
      <div
        className='relative h-100 w-full bg-cover sm:mt-12'
        style={{ backgroundImage: `url(${bgImagen})` }}
      >
        <div className='absolute inset-0 bg-primary bg-opacity-50'></div>
        <div className='relative flex items-center justify-center h-full text-white'>
          <h1 className='text-3xl font-bold'>{servicio.titulo}</h1>
        </div>
      </div>

      {/* Contenido del Servicio */}
      <div className='container mx-auto px-6 md:px-12 py-12'>
        {/* Icono y subtítulo */}
        <div className='flex flex-col items-center justify-center  mb-6'>
          <span className='text-4xl text-primary'>{servicio.icono}</span>
          <h4 className='text-2xl mb-3'>{servicio.subtitulo}</h4>
        </div>

        {/* Descripción del servicio */}
        <div className='flex flex-col justify-center w-full items-center'>
          <div
            className='text-gray-600 dark:text-gray-300 mb-6 sm:w-3/4  '
            dangerouslySetInnerHTML={{ __html: servicio.descripcion }}
          />
          {/* Imagen del servicio */}
          <div className='flex justify-center mb-6'>
            <img
              src={servicio.imagen}
              alt={servicio.titulo}
              className='rounded-lg shadow-lg  sm:w-1/2'
            />
          </div>
        </div>
        {/* Botón de WhatsApp */}
        <div className='mt-5 flex justify-center'>
          <button className='bg-primary text-white w-full sm:w-1/2 px-6 py-3 rounded-lg font-semibold hover:bg-primary/80 transition'>
            <Link
              to={`https://wa.me/+543834217703?text=Hola, estoy interesado en el servicio de ${servicio.titulo}`}
              target='_blank'
            >
              Pedir presupuesto
            </Link>
          </button>
        </div>
      </div>
    </HomeLayout>
  );
};

export { ServicioDetalle };
