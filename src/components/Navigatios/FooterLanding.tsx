import { CgInstagram } from 'react-icons/cg';
import { FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router';

export const FooterLanding = () => {
  return (
    <footer className='bg-gray-900 text-white pt-12 pb-6'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8 mb-8'>
          <div>
            <h3 className='text-xl font-bold mb-4'>Calipso Records</h3>
            <p className='text-gray-400 mb-4'>
              Producción de audio profesional y venta de equipamiento técnico de
              alta calidad para músicos y productores.
            </p>
            <div className='flex space-x-4'>
              <a
                href='https://www.instagram.com/calipso.records/'
                target='_blank'
                className='text-gray-400 hover:text-primary transition-colors'
              >
                <CgInstagram className='h-5 w-5' />
              </a>
              <a
                href='https://wa.me/+543834217703?text=Hola, Quiero saber más informacion sobre los servicios y productos de Calipso Records'
                target='_blank'
                className='text-gray-400 hover:text-primary transition-colors'
              >
                <FaWhatsapp className='h-5 w-5' />
              </a>
            </div>
          </div>

          <div>
            <h3 className='text-lg font-semibold mb-4'>Servicios</h3>
            <ul className='space-y-2'>
              <li>
                <Link
                  to='/servicios'
                  className='text-gray-400 hover:text-primary transition-colors'
                >
                  Grabación
                </Link>
              </li>
              <li>
                <Link
                  to='/servicios'
                  className='text-gray-400 hover:text-primary transition-colors'
                >
                  Mezcla
                </Link>
              </li>
              <li>
                <Link
                  to='/servicios'
                  className='text-gray-400 hover:text-primary transition-colors'
                >
                  Mastering
                </Link>
              </li>
              <li>
                <Link
                  to='/servicios'
                  className='text-gray-400 hover:text-primary transition-colors'
                >
                  Producción Musical
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className='text-lg font-semibold mb-4'>Productos</h3>
            <ul className='space-y-2'>
              <li>
                <Link
                  to='/productos'
                  className='text-gray-400 hover:text-primary transition-colors'
                >
                  Monitoreo
                </Link>
              </li>
              <li>
                <Link
                  to='/productos'
                  className='text-gray-400 hover:text-primary transition-colors'
                >
                  Grabación
                </Link>
              </li>
              <li>
                <Link
                  to='/productos'
                  className='text-gray-400 hover:text-primary transition-colors'
                >
                  Accesorios
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className='text-lg font-semibold mb-4'>Contacto</h3>
            <address className='text-gray-400 not-italic'>
              <p className='mb-2'>San Fernando del Valle de Catamarca</p>
              <p className='mb-2'>Provincia de Catamarca</p>
              <p className='mb-2'>Teléfono: +54 (3834) 2177-03</p>
              {/* <p className='mb-2'>Email: info@audiostudio.com</p> */}
            </address>
          </div>
        </div>

        <div className='border-t border-gray-800 pt-6 mt-6'>
          <div className='flex flex-col md:flex-row justify-between items-center'>
            <p className='text-gray-400 text-sm mb-4 md:mb-0'>
              &copy; {new Date().getFullYear()} Calipso Records. Todos los
              derechos reservados.
            </p>
            <div className='flex space-x-4'>
              <Link
                to='/terminos'
                className='text-gray-400 hover:text-primary transition-colors text-sm'
              >
                Términos y Condiciones
              </Link>
              <Link
                to='/privacidad'
                className='text-gray-400 hover:text-primary transition-colors text-sm'
              >
                Política de Privacidad
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
