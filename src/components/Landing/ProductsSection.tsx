import { Link } from 'react-router';
import products from '../../data/products.json';

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

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
          {products.map((product) => (
            <div
              key={product.id}
              className='relative bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-700'
            >
              {/* Imagen del producto */}
              <div className='relative'>
                <img
                  src={product.imagenes[0]}
                  alt={product.titulo}
                  className='w-full h-48 object-contain'
                />
                {/* Etiqueta de Agotado */}
                {product.stock == 0 && (
                  <div className='absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-md shadow-md'>
                    AGOTADO
                  </div>
                )}
                {!product.agotado &&
                  product.stock <= 5 &&
                  product.stock > 0 && (
                    <div className='absolute bottom-2 left-2 bg-secondary text-primary text-xs font-bold px-3 py-1 rounded-md shadow-md'>
                      Últimos disponibles
                    </div>
                  )}
              </div>

              {/* Información del producto */}
              <div className='p-4'>
                <h3 className='text-lg font-bold mb-2'>{product.titulo}</h3>
                <p className='mb-1'>{product.subtitulo}</p>

                <div className='flex justify-between items-center'>
                  <div>
                    <span className='text-xl font-bold text-primary'>
                      ${product.precio}
                    </span>
                  </div>

                  {/* Enlace a detalles del producto */}
                  <Link
                    to={`/producto/${product.id}`}
                    className='text-primary hover:text-primary/80 font-semibold text-sm transition-colors'
                  >
                    Ver detalles →
                  </Link>
                </div>
              </div>
            </div>
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
