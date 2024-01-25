import { useDocumentTitle } from 'usehooks-ts';
import './HomePage.scss';

export const HomePage: React.FC = () => {
  useDocumentTitle('Home');

  return (
    <h1>
      HomePage
    </h1>
  );
};
