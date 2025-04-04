import { Route, Routes } from 'react-router';
import { HomeView } from './modules';

import { ServicioDetalle, ServiciosView } from './components/Landing';
import { NotFoundPage } from './components/NotFound/NotFound';
import { ProductDetails, ProductsView } from './modules/products/views';
import { ContactsView } from './modules/Landing/Home/ContactsView';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomeView />} />
      <Route path='/servicios' element={<ServiciosView />} />
      <Route path='/servicios/:tituloServicio' element={<ServicioDetalle />} />
      <Route path='/productos' element={<ProductsView />} />
      <Route
        path='/productos/ver-detalles/:idProducto/:tituloProducto'
        element={<ProductDetails />}
      />
      <Route path='/contacto' element={<ContactsView />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
