import './AccessoriesPage.scss';
import { useDocumentTitle } from 'usehooks-ts';

export const AccessoriesPage: React.FC = () => {
  useDocumentTitle('Accessories');

  return (
    <h1>AccessoriesPage</h1>
  );
};
