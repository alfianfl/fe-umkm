import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { routes } from './routes';
import LayoutUser from '../components/Commons/Layouts/LayoutUser';
import { ScrollToTop } from '../helpers';

function router() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LayoutUser />}>
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
