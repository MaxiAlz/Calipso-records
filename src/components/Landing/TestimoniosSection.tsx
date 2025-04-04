const TestimoniosSection = () => {
  const testimonials = [
    {
      quote:
        'Me senti muy comoda trabajando con el equipo de Calipso. Me ayudaron a encontrar el sonido que buscaba y a darle vida a mis ideas.',
      author: 'Eli Rodriguez',
      role: 'Cantautora y compositora',
    },
    {
      quote:
        'Gracias a su servicio de mezcla y masterización, nuestra cancion mejoro notamblemente luego de este proceso.',
      author: 'Gonzalo quinteros',
      role: 'Musico y productor',
    },
    {
      quote:
        'Mis presentaciones en vivo mejoraron un monton con los In Ears que me recomendaron. Sonido y comodidad inigualable.',
      author: 'Matias Calderon',
      role: 'Cantante en Brujas del Valle',
    },
    // {
    //   quote:
    //     'Grabamos percuciones en el estudio con maxi en los controles, quedamos muy conformes con el resultado y la atencion.',
    //   author: 'David Quiroga',
    //   role: 'Percusionista y sessionista',
    // },
   
  ];

  return (
    <section className='py-16 bg-gray-100 dark:bg-gray-800'>
      <div className='container mx-auto px-4'>
        <h2 className='text-3xl font-bold text-center mb-4'>Testimonios</h2>
        <p className='text-center text-lg mb-12 max-w-3xl mx-auto'>
          Lo que dicen nuestros clientes
        </p>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className='bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md'
            >
              <div className='mb-4 text-primary'>
                <svg
                  className='h-8 w-8'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path d='M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z' />
                </svg>
              </div>
              <p className='text-gray-700 dark:text-gray-300 mb-4 italic'>
                "{testimonial.quote}"
              </p>
              <div>
                <p className='font-bold'>{testimonial.author}</p>
                <p className='text-gray-600 dark:text-gray-400 text-sm'>
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { TestimoniosSection };
