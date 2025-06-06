import { Link } from 'react-router';
import categories from '../../data/categoriesProducts.json';

interface ProductCardProps {
  id: number;
  imagenes: string[];
  titulo: string;
  subtitulo: string;
  precio: number;
  stock: number;
  agotado?: boolean;
  categoria_ids: number[];
}

const ProductCard = ({
  id,
  imagenes,
  titulo,
  subtitulo,
  precio,
  stock,
  agotado,
  categoria_ids,
}: ProductCardProps) => {
  return (
    <div
      key={id}
      className='relative bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-700'
    >
      {/* Imagen del producto */}
      <div className='relative'>
        <img
          src={imagenes[0]}
          alt={titulo}
          className='w-full h-48 object-contain'
        />
        {/* Etiqueta de Agotado */}
        {agotado && (
          <div className='absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-md shadow-md'>
            AGOTADO
          </div>
        )}
        {!agotado && stock <= 5 && stock > 0 && (
          <div className='absolute bottom-2 left-2 bg-secondary text-primary text-xs font-bold px-3 py-1 rounded-md shadow-md'>
            Últimos disponibles
          </div>
        )}
      </div>

      {/* Información del producto */}
      <div className='p-4'>
        <h3 className='text-lg font-bold mb-2'>{titulo}</h3>
        <p className='mb-1'>{subtitulo}</p>

        {/* Categorías */}
        <div className='flex flex-wrap gap-1 mb-3'>
          {categoria_ids.map((catId) => {
            const categoria = categories.find((cat) => cat.id === catId);
            return categoria ? (
              <span
                key={categoria.id}
                className='bg-primary/10 text-primary text-xs px-2 py-1 rounded-full'
              >
                {categoria.nombre}
              </span>
            ) : null;
          })}
        </div>

        <div className='flex justify-between items-center'>
          <div>
            <span className='text-xl font-bold text-primary'>
              ${precio.toLocaleString('es-ES')}
            </span>
          </div>

          {/* Enlace a detalles del producto */}
          <Link
            to={`/productos/ver-detalles/${id}/${titulo}`}
            className='text-primary hover:text-primary/80 font-semibold text-sm transition-colors'
          >
            Ver detalles →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
