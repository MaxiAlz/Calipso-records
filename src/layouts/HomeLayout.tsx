import { ReactNode, useEffect, useRef } from 'react';
import { FooterLanding, HeaderLanding } from '../components/Navigatios';
import { useLocation } from 'react-router';

interface HomeLayoutProps {
  children: ReactNode;
  pageTitle?: string;
}
const scrollPositions: Record<string, number> = {};

const HomeLayout = ({ children, pageTitle }: HomeLayoutProps) => {
  const { pathname } = useLocation();
  const prevPathRef = useRef<string | null>(null);

  useEffect(() => {
    const prevPath = prevPathRef.current;

    if (prevPath === '/') {
      scrollPositions['/'] = window.scrollY;
    }

    if (pathname !== '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    if (pathname === '/' && scrollPositions['/'] !== undefined) {
      setTimeout(() => {
        window.scrollTo({ top: scrollPositions['/'], behavior: 'auto' });
      }, 0);
    }

    prevPathRef.current = pathname;
  }, [pathname]);

  useEffect(() => {
    document.title = `${pageTitle} | Calipso Records `;
    return () => {
      document.title = 'Calipso Records';
    };
  }, [pageTitle]);

  return (
    <div className='flex h-screen '>
      <div className='flex flex-1 flex-col'>
        <HeaderLanding />
        <main className='flex-1 dark:bg-gray-800 '>{children}</main>
        <FooterLanding />
      </div>
    </div>
  );
};

export { HomeLayout };
