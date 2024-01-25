import { useDocumentTitle } from 'usehooks-ts';
import './TabletsPage.scss';

export const TabletsPage: React.FC = () => {
  useDocumentTitle('Tablets');

  return (
    <h1>TabletsPage</h1>
  );
};
