import 'reset-css';
import 'normalize.css';
import './styles/main.scss';
import './index.scss';
import { createRoot } from 'react-dom/client';
import { Router } from './Router';

createRoot(document.getElementById('root') as HTMLElement)
  .render(<Router />);
