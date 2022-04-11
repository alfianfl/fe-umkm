import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { routes } from './routes';
import LayoutUser from '../components/Layouts/LayoutUser';

function router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutUser/>}>
          {routes.map((route, index) => (
            <Route
              key={index}
              element={<route.component />}
              path={route.path()}
            />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default router;
