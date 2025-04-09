import { Link } from 'react-router';
import imgCalipsoPortada from '../../assets/images/img_eli.jpg';

const HearoSection = () => {
  return (
    <section className='w-full relative bg-primary text-secondary pt-20 pb-10 md:py-30 '>
      <div className='container mx-auto px-4 flex flex-col-reverse md:flex-row justify-around items-center gap-6 md:px-10'>
        <div className='text-center md:text-left'>
          <h1 className='max-w-2xl mb-4 text-3xl font-extrabold tracking-tight text-secondary md:text-5xl xl:text-6xl dark:text-white'>
            Sonido profesional para tus proyectos musicales
          </h1>
          <p className='max-w-2xl text-white md:text-lg lg:text-xl dark:text-gray-400'>
            Estudio de grabación profesional, servicios de mezcla, mastering y
            venta de equipamiento técnico para la industria musical.
          </p>
          <p className='font-bold text-white mt-2 text-lg md:text-xl'>
            ¡Vive y disfruta tus pasiones!
          </p>

          <div className='flex flex-col sm:flex-row flex-wrap gap-4 mt-4 justify-center md:justify-start'>
            <Link
              to='/servicios'
              className='bg-white text-primary hover:bg-secondary hover:text-primary font-semibold px-6 py-3 rounded-md transition-colors'
            >
              Nuestros servicios
            </Link>
            <Link
              to='/contacto'
              className='bg-transparent border-2 border-white hover:bg-white/10 font-semibold px-6 py-3 rounded-md transition-colors'
            >
              Contáctanos
            </Link>
          </div>
        </div>

        <div className='w-full max-w-sm md:max-w-md lg:max-w-lg lg:ml-20'>
          <img
            src={imgCalipsoPortada}
            alt='Hero Image'
            className='w-3/4 h-auto rounded-lg shadow-lg'
          />
        </div>
      </div>
    </section>
  );
};

export { HearoSection };
