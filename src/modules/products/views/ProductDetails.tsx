import { useParams } from 'react-router';
import { HomeLayout } from '../../../layouts/HomeLayout';
import products from '../../../data/products.json';
import categories from '../../../data/categoriesProducts.json';
import { Badge, Button, Carousel, Tooltip } from 'flowbite-react';

const ProductDetails = () => {
  const { idProducto } = useParams();

  const product = products.find(
    (prod) => prod.id === parseInt(idProducto ?? '0')
  );

  if (!product) {
    return (
      <HomeLayout pageTitle='Producto no encontrado'>
        <div className='min-h-screen flex items-center justify-center'>
          <p className='text-xl text-gray-500'>Producto no encontrado 😢</p>
        </div>
      </HomeLayout>
    );
  }

  const wspMessage = `Hola! Estoy interesado en el producto "${product.titulo}". ¿Está disponible?`;
  const wspURL = `https://wa.me/5493834217703?text=${encodeURIComponent(wspMessage)}`;

  const productCategories = categories.filter((cat) =>
    product.categoria_ids.includes(cat.id)
  );

  return (
    <HomeLayout pageTitle={product.titulo}>
      <div className='max-w-6xl mx-auto px-4 py-6 mt-15'>
        {/* Carrusel e info básica */}
        <div className='grid md:grid-cols-2 gap-6'>
          <div className='h-96 w-full border border-primary rounded-lg shadow-xl'>
            <Carousel
              slideInterval={4000}
              className='rounded-lg h-full0'
              theme={{
                control: {
                  base: 'inline-flex items-center justify-center rounded-full bg-primary text-white hover:bg-green-800 focus:outline-none',
                  icon: 'w-10 h-10',
                },
              }}
            >
              {product.imagenes.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`${product.titulo} ${idx}`}
                  className='object-contain w-full h-full'
                />
              ))}
            </Carousel>
          </div>

          <div className='space-y-4 h-full flex flex-col'>
            <h1 className='text-3xl font-bold text-gray-800'>
              {product.titulo}
            </h1>
            <h2 className='text-xl text-gray-600'>{product.subtitulo}</h2>

            {/* Categorías */}
            <div className='flex flex-wrap gap-2'>
              {productCategories.map((category) => (
                <Badge
                  key={category.id}
                  color='primary'
                  className='bg-primary/10 text-primary'
                >
                  {category.nombre}
                </Badge>
              ))}
            </div>

            <div className='flex items-center gap-2'>
              <p className='text-2xl font-bold text-primary'>
                ${product.precio.toLocaleString()}
              </p>
              {!product.agotado && product.stock <= 5 && product.stock > 0 && (
                <Badge color='warning'>Últimos disponibles</Badge>
              )}
              {product.agotado && <Badge color='failure'>AGOTADO</Badge>}
            </div>

            <div className='flex items-center gap-2'>
              <span className='font-semibold'>Colores:</span>
              {product.colores_disponibles.map((color, idx) => (
                <Tooltip
                  content={`${color.nombre}${color.disponible === false ? ' (no disponible)' : ''}`}
                  key={idx}
                >
                  <div
                    className='flex items-center gap-1'
                    style={{ opacity: color.disponible !== false ? 1 : 0.5 }}
                  >
                    <div
                      title={color.nombre}
                      className='w-6 h-6 rounded-full border border-gray-300'
                      style={{ backgroundColor: color.codigo_hex }}
                    />
                  </div>
                </Tooltip>
              ))}
            </div>
            <div className='flex items-center gap-2'>
              <Button
                disabled={product.agotado}
                color='success'
                href={wspURL}
                target='_blank'
                className='sm:w-3/4 w-full mt-5'
              >
                Comprar
              </Button>
            </div>
          </div>
        </div>

        {/* Descripción extendida */}
        <div className='mt-10 prose max-w-none dark:prose-invert'>
          <div dangerouslySetInnerHTML={{ __html: product.descripcion }} />
        </div>
      </div>
    </HomeLayout>
  );
};

export { ProductDetails };
