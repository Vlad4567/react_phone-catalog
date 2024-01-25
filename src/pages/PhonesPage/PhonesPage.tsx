import { useDocumentTitle } from 'usehooks-ts';
import './PhonesPage.scss';

export const PhonesPage: React.FC = () => {
  useDocumentTitle('Phones');

  return (
    <h1>PhonesPage</h1>
  );
};
