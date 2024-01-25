import { useDocumentTitle } from 'usehooks-ts';
import './NotFoundPage.scss';

export const NotFoundPage: React.FC = () => {
  useDocumentTitle('Oops...');

  return (
    <h1>NotFoundPage</h1>
  );
};
