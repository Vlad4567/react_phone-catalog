import { useDocumentTitle } from 'usehooks-ts';
import './ShoppingBagPage.scss';

export const ShoppingBagPage: React.FC = () => {
  useDocumentTitle('Bag');

  return (
    <h1>ShoppingBagPage</h1>
  );
};
