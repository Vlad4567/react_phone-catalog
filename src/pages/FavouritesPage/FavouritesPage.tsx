import { useDocumentTitle } from 'usehooks-ts';
import './FavouritesPage.scss';

export const FavouritesPage: React.FC = () => {
  useDocumentTitle('Favourites');

  return (
    <h1>FavouritesPage</h1>
  );
};
