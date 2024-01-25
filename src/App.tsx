import { Outlet } from 'react-router-dom';
import './App.scss';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Menu } from './components/Menu/Menu';

export const App = () => {
  return (
    <>
      <Header />

      <Menu />

      <main className="main">
        <Outlet />
      </main>

      <Footer />
    </>
  );
};
