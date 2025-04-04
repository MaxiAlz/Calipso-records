import { ReactNode, useEffect } from 'react';
import { FooterLanding, HeaderLanding } from '../components/Navigatios';
import { useLocation } from 'react-router';

interface HomeLayoutProps {
  children: ReactNode;
  pageTitle?: string;
}

const HomeLayout = ({ children, pageTitle }: HomeLayoutProps) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
