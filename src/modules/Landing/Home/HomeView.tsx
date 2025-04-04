import {
  AboutSection,
  HearoSection,
  PaylistSpotify,
  ProductsSection,
  ServicesSection,
  TestimoniosSection,
} from '../../../components/Landing';

import { HomeLayout } from '../../../layouts/HomeLayout';

const HomeView = () => {
  return (
    <HomeLayout pageTitle='Inicio'>
      <div className='flex flex-col flex-1'>
        <HearoSection />
        <ServicesSection />
        <div className='h-[1px] w-full bg-primary my-6' />
        <ProductsSection />
        <AboutSection />
        <PaylistSpotify />
        <TestimoniosSection />
      </div>
    </HomeLayout>
  );
};

export { HomeView };
