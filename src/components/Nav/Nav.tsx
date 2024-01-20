import { NavLink } from 'react-router-dom';
import './Nav.scss';

const getClassLink = ({ isActive }: { isActive: boolean }): string => {
  return `nav__item-link ${
    isActive
      ? 'nav__item-link--active'
      : ''
  }`;
};

export const Nav: React.FC = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <NavLink to="/" className={getClassLink}>
            Home
          </NavLink>
        </li>

        <li className="nav__item">
          <NavLink to="/phones" className={getClassLink}>
            Phones
          </NavLink>
        </li>

        <li className="nav__item">
          <NavLink to="/tablets" className={getClassLink}>
            Tablets
          </NavLink>
        </li>

        <li className="nav__item">
          <NavLink to="/accessories" className={getClassLink}>
            Accessories
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
