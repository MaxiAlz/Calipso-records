import { useEffect, useState } from 'react';
import { BiMenu, BiX } from 'react-icons/bi';
import { Link } from 'react-router';

const navLinks = [
  { name: 'Inicio', href: '/' },
  { name: 'Servicios', href: '/servicios' },
  { name: 'Productos', href: '/productos' },
  { name: 'Contacto', href: '/contacto' },
];

const HeaderLanding = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showNavbar, setShowNavbar] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 200);
      if (currentScrollY > lastScrollY && currentScrollY > 400) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
  //   if (e.target === e.currentTarget) {
  //     setMobileMenuOpen(false);
  //   }
  // };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        showNavbar ? 'translate-y-0' : '-translate-y-full'
      } ${isScrolled ? 'bg-primary' : 'bg-white shadow-md text-primary'}`}
    >
      <div className='container mx-auto px-4'>
        <div className='flex justify-between items-center h-16'>
          {/* Logo */}
          <Link to='/' className='flex items-center'>
            <span
              className={`text-2xl font-bold ${
                isScrolled ? 'text-white' : 'text-primary'
              }`}
            >
              CALIPSO Records
            </span>
          </Link>

          {/* Menú Desktop */}
          <div className='hidden md:flex md:items-center md:space-x-8'>
            <nav className='flex space-x-8'>
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`font-medium transition-colors ${
                    isScrolled
                      ? 'text-white hover:text-gray-200'
                      : 'text-primary hover:text-gray-700'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Botón Menú Mobile */}
          <div className='md:hidden flex items-center'>
            <button
              type='button'
              className={`ml-2 p-2 rounded-md ${
                isScrolled ? 'text-white' : 'text-gray-700'
              }`}
              onClick={() => setMobileMenuOpen(true)}
            >
              <BiMenu className='h-6 w-6' />
            </button>
          </div>
        </div>
      </div>

      {/* Drawer Mobile */}
      {mobileMenuOpen && (
        <div
          className='fixed inset-0 z-50 bg-black bg-opacity-60 flex justify-end h-screen'
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className='bg-white w-3/4 max-w-sm h-full p-6 shadow-xl'
            onClick={(e) => e.stopPropagation()} // Evita cerrar si hace clic adentro
          >
            <div className='flex items-center justify-between mb-8'>
              <h2 className='text-2xl font-bold text-primary'>CALIPSO</h2>
              <button
                type='button'
                className='p-2 text-gray-700'
                onClick={() => setMobileMenuOpen(false)}
              >
                <BiX className='h-6 w-6' />
              </button>
            </div>
            <nav className='space-y-6'>
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className='block text-gray-700 hover:text-primary text-lg font-medium'
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};
export { HeaderLanding };
