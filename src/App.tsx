import { Outlet } from 'react-router-dom';
import './App.scss';
import { Header } from './components/Header/Header';

export const App = () => (
  <>
    <Header />
    <Outlet />
  </>
);
