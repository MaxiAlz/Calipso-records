import { Link } from 'react-router';

const NotFoundPage = () => {
  return (
    <div className='min-h-screen bg-white flex flex-col items-center justify-center text-center px-4'>
      <h1 className='text-6xl font-extrabold text-primary mb-4'>404</h1>
      <p className='text-xl text-gray-600 mb-6'>
        La página que estás buscando no existe.
      </p>
      <Link
        to='/'
        className='bg-primary text-white px-6 py-3 rounded-xl hover:bg-opacity-90 transition-all'
      >
        Volver al inicio
      </Link>
    </div>
  );
};

export { NotFoundPage };
