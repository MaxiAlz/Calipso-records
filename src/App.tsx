import { Route, Routes } from 'react-router';
import { HomeView } from './modules';

import { ServicioDetalle, ServiciosView } from './components/Landing';
import { NotFoundPage } from './components/NotFound/NotFound';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomeView />} />
      <Route path='/servicios' element={<ServiciosView />} />
      <Route path='/servicios/:tituloServicio' element={<ServicioDetalle />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
