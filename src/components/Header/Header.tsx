import { Link, NavLink } from 'react-router-dom';
import './Header.scss';
import { Nav } from '../Nav/Nav';

const getClassBlockIcon = ({ isActive }: { isActive: boolean }) => {
  return `header__block-icon ${
    isActive
      ? 'header__block-icon--active'
      : ''
  }`;
};

export const Header: React.FC = () => {
  return (
    <header className="header" id="header">
      <div className="header__left-side">
        <Link to="/" className="header__logo">
          <i className="icon icon--logo" />
        </Link>

        <Nav />
      </div>

      <div className="header__right-side">
        <NavLink
          to="/favourites"
          className={getClassBlockIcon}
        >
          <i className="icon icon--favourites" />
        </NavLink>

        <NavLink
          to="/shopping-bag"
          className={getClassBlockIcon}
        >
          <i className="icon icon--shopping-bag" />
        </NavLink>

        <Link
          to="/menu"
          className="header__block-icon header__block-icon--menu"
        >
          <i className="icon icon--menu" />
        </Link>
      </div>
    </header>
  );
};
