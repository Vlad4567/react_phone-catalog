import {
  HashRouter,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import { App } from './App';
import { HomePage } from './pages/HomePage/HomePage';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';
import { PhonesPage } from './pages/PhonesPage/PhonesPage';
import { TabletsPage } from './pages/TabletsPage/TabletsPage';
import { AccessoriesPage } from './pages/AccessoriesPage/AccessoriesPage';
import { MenuPage } from './pages/MenuPage/MenuPage';
import { FavouritesPage } from './pages/FavouritesPage/FavouritesPage';
import { ShoppingBagPage } from './pages/ShoppingBagPage/ShoppingBagPage';

export const Router = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="/phones" element={<PhonesPage />} />
        <Route path="/tablets" element={<TabletsPage />} />
        <Route path="/accessories" element={<AccessoriesPage />} />
        <Route path="/favourites" element={<FavouritesPage />} />
        <Route path="/shopping-bag" element={<ShoppingBagPage />} />

        <Route path="/menu" element={<MenuPage />} />

        <Route path="*" element={<Navigate to="/not-found" replace />} />
        <Route path="/not-found" element={<NotFoundPage />} />
      </Route>
    </Routes>
  </HashRouter>
);
