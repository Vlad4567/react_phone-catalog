import { HashRouter, Route, Routes } from 'react-router-dom';
import { App } from './App';
import { NotFoundPage } from './pages/NotFoundPage';
import { HomePage } from './pages/HomePage';

export const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};
