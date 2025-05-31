import { HomeLayout } from '../../../layouts/HomeLayout';
import products from '../../../data/products.json';
import ProductCard from '../../../components/Cards/ProductCard';
import bgImagen from '../../../assets/images/CALIPSO-1.jpg';

const ProductsView = () => {
  return (
    <HomeLayout pageTitle='Productos'>
      <div
        className='relative h-100 w-full bg-cover sm:mt-12'
        style={{ backgroundImage: `url(${bgImagen})` }}
      >
        <div className='absolute inset-0 bg-primary bg-opacity-70'></div>
        <div className='relative flex items-center justify-center h-full flex-col text-white'>
          <h1 className='text-3xl font-bold'>Nuestros Productos</h1>
          <p className='mt-4 mx-2 text-center  text-white'>
            Estamos trabajando para ofrecerte una experiencia de compra
            excepcional.
          </p>
        </div>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 my-5 mx-8'>
        {products.map((product) => (
          <ProductCard {...product} key={product.id} />
        ))}
      </div>
      <section className='my-10 px-4 py-8 flex flex-col justify-center items-center text-center'>
        <h1 className='text-2xl'>Proximamente mas productos en la tienda</h1>

        <p className='mt-4 text-center w-3/4 font-light'>
          En breve, podrás explorar una amplia gama de productos y realizar tus
          compras de manera fácil y rápida. Mientras tanto, te invitamos a
          visitar nuestro sitio web y descubrir todo lo que tenemos para
          ofrecerte.
        </p>
        <p className='mt-4  text-primary'>¡Gracias por tu paciencia y apoyo!</p>
      </section>
    </HomeLayout>
  );
};

export { ProductsView };
