import imgCalipsoUno from '../../assets/images/img_tiki.jpg';

const AboutSection = () => {
  return (
    <section className='py-16 bg-primary  my-5 dark:bg-gray-900'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col lg:flex-row items-center gap-12'>
          <div className='sm:w-1/2 h-500'>
            <img
              src={imgCalipsoUno}
              alt='Imagen persona grabando'
              className='w-2/3 object-cover '
            />
          </div>

          <div className='lg:w-1/2'>
            <h2 className='text-3xl font-bold mb-6 text-secondary'>
              Sobre Calipso Records
            </h2>
            <p className='text-white mb-4'>
              Somos un estudio de grabación y productora de audio donde nuestro
              objetivo es ofrecer servicios de alta calidad para artistas,
              bandas, productores y creadores de contenido.
            </p>
            <p className='text-white mb-4'>
              Contamos con equipamiento de primer nivel y un equipo de
              profesionales apasionados por la música y el sonido. Además de
              nuestros servicios de grabación, mezcla y mastering, ofrecemos una
              cuidada selección de productos técnicos para músicos y estudios.
            </p>
            <p className='text-white mb-6'>
              En Calipso Records entendemos que cada proyecto es único, por eso
              nos adaptamos a tus necesidades específicas para lograr el mejor
              resultado posible.
            </p>

            <div className='grid grid-cols-2 gap-4'>
              <div>
                <h4 className='font-bold text-lg text-secondary mb-2'>4+</h4>
                <p className='text-white'>Años de experiencia</p>
              </div>
              <div>
                <h4 className='font-bold text-lg text-secondary mb-2'>100%</h4>
                <p className='text-white'>Apasionados por lo que hacemos</p>
              </div>
              <div>
                <h4 className='font-bold text-lg text-secondary mb-2'>50+</h4>
                <p className='text-white'>Artistas recurrentes</p>
              </div>
              <div>
                <h4 className='font-bold text-lg text-secondary mb-2'>100%</h4>
                <p className='text-white'>Satisfacción del cliente</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { AboutSection };
