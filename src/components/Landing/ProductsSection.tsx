import { Link } from 'react-router';
import products from '../../data/products.json';
import ProductCard from '../Cards/ProductCard';

const ProductsSection = () => {
  return (
    <section className=' bg-white dark:bg-gray-900'>
      <div className='container mx-auto px-4'>
        <h2 className='text-3xl font-bold text-center mb-4'>
          Productos Destacados
        </h2>
        <p className='text-center text-lg mb-12 max-w-3xl mx-auto'>
          Equipamiento profesional para músicos y productores
        </p>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
          {products
            .filter((product) => product.destacado)
            .map((product) => (
              <ProductCard {...product} key={product.id} />
            ))}
        </div>

        <div className='text-center mt-12'>
          <Link
            to='/productos'
            className='bg-primary hover:bg-primary/90 text-white font-medium py-3 px-8 rounded-md transition-colors inline-block'
          >
            Ver todos los productos
          </Link>
        </div>
      </div>
    </section>
  );
};

export { ProductsSection };
