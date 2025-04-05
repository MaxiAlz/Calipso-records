import { HomeLayout } from '../../../layouts/HomeLayout';
import bgImagen from '../../../assets/images/calipso-2.jpg';
import { FaInstagram, FaSpotify, FaWhatsapp } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { BsGlobe2 } from 'react-icons/bs';

const ContactsView = () => {
  return (
    <HomeLayout pageTitle='Contactos'>
      <div
        className='relative h-50 w-full bg-cover sm:mt-12'
        style={{ backgroundImage: `url(${bgImagen})` }}
      >
        <div className='absolute inset-0 bg-primary bg-opacity-50'></div>
        <div className='relative flex items-center justify-center h-full text-white'>
          <h1 className='text-3xl font-bold'>Contactanos</h1>
        </div>
      </div>

      <div className='w-full max-w-md mx-auto my-8 px-4'>
        <div className='flex flex-col gap-4'>
          <a
            href='https://wa.me/5493834217703'
            target='_blank'
            className='flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-5 rounded-2xl transition-all'
          >
            <FaWhatsapp className='text-xl' />
            <span>Enviarnos un WhatsApp</span>
          </a>

          <a
            href='/'
            className='flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-5 rounded-2xl transition-all'
          >
            <BsGlobe2 className='text-xl' />
            <span>Página Web</span>
          </a>

          <a
            href='https://instagram.com/calipso.records'
            target='_blank'
            className='flex items-center gap-3 bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-5 rounded-2xl transition-all'
          >
            <FaInstagram className='text-xl' />
            <span>Instagram</span>
          </a>

          <a
            href='mailto:maxialz99@hotmail.com'
            className='flex items-center gap-3 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-5 rounded-2xl transition-all'
          >
            <FiMail className='text-xl' />
            <span>Envíanos un Email</span>
          </a>

          <a
            href='https://open.spotify.com/playlist/7wO9BTxPWjT5kal8UB95yo?si=19505adeb1ac4229'
            target='_blank'
            className='flex items-center gap-3 bg-primary hover:bg-emerald-700 text-white font-semibold py-3 px-5 rounded-2xl transition-all'
          >
            <FaSpotify className='text-xl' />
            <span>Escuchá nuestros trabajos en Spotify</span>
          </a>
        </div>
      </div>
    </HomeLayout>
  );
};

export { ContactsView };
