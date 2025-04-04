import { HomeLayout } from '../../../layouts/HomeLayout';
import { servicios } from '../../../data/servicio';
import bgImagen from '../../../assets/images/calipso-4.jpg';
import { ServiciosCard } from '../../../components/Cards';

const ServiciosView = () => {
  return (
    <HomeLayout pageTitle='Servicios'>
      <div
        className='relative h-100 w-full bg-cover bg-center sm:mt-12'
        style={{ backgroundImage: `url(${bgImagen})` }}
      >
        <div className='absolute inset-0 bg-primary bg-opacity-70'></div>
        <div className='relative flex items-center justify-center h-full text-white flex-col'>
          <h1 className='text-3xl font-bold'>Nuestros Servicios</h1>
          <span className=' mt-2 text-white mx-2 text-center text-xl'>
            Queremos ser lideres en servicios para la industria musical.
          </span>
          <span className='text-md mt-2 text-white mx-2 text-center'>
            Mira todo lo que tenemos para vos
          </span>
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-8 m-10'>
        {servicios.map((service, index) => (
          <ServiciosCard
            key={index}
            icono={service.icono}
            subtitulo={service.subtitulo}
            titulo={service.titulo}
          />
        ))}
      </div>
    </HomeLayout>
  );
};

export { ServiciosView };
