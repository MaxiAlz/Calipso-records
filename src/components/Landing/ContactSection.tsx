import { Link } from 'react-router';

const ContactSection = () => {
  return (
    <section className='py-16 bg-primary text-white'>
      <div className='container mx-auto px-4 text-center'>
        <h2 className='text-3xl font-bold mb-4'>
          ¿Listo para empezar tu proyecto?
        </h2>
        <p className='text-lg mb-8 max-w-2xl mx-auto'>
          Contáctanos hoy mismo para discutir tus necesidades y cómo podemos
          ayudarte a llevar tu música al siguiente nivel.
        </p>
        <Link
          to='/contacto'
          className='bg-white text-primary hover:bg-secondary hover:text-primary font-semibold px-8 py-3 rounded-md transition-colors inline-block'
        >
          Contáctanos ahora
        </Link>
      </div>
    </section>
  );
};

export { ContactSection };
