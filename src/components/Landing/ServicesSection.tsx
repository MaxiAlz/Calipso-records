import { Link } from 'react-router';
import { servicios } from '../../data/servicio';
import { ServiciosCard } from '../Cards';

const ServicesSection = () => {
  return (
    <section className='py-5 bg-secondary/10 dark:bg-gray-900'>
      <div className='container mx-auto px-4'>
        <h2 className='text-3xl font-bold text-center mb-4'>
          Nuestros Servicios
        </h2>
        <p className='text-center text-lg mb-12 max-w-3xl mx-auto'>
          Ofrecemos servicios profesionales de audio para llevar tu música al
          siguiente nivel
        </p>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {servicios.slice(0, 3).map((service, index) => (
            <ServiciosCard
              key={index}
              icono={service.icono}
              subtitulo={service.subtitulo}
              titulo={service.titulo}
            />
          ))}
        </div>

        <div className='text-center mt-12'>
          <Link
            to='/servicios'
            className='bg-primary hover:bg-primary/90 text-white font-medium py-3 px-8 rounded-md transition-colors inline-block'
          >
            Ver todos los servicios
          </Link>
        </div>
      </div>
    </section>
  );
};
export { ServicesSection };
