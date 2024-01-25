import { Link } from 'react-router-dom';
import logo from '../../img/logo.svg';

interface Props {
  className?: string
}

export const Logo: React.FC<Props> = ({
  className = '',
}) => {
  return (
    <Link to="/" className={`logo ${className}`}>
      <img src={logo} alt="Logo" className="logo__img" />
    </Link>
  );
};
