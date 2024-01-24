import { NavLink } from 'react-router-dom';
import './Nav.scss';

interface ClassName {
  nav?: string
  list?: string
  item?: string
  itemLink?: string
}

const defaultClassName: ClassName = {
  nav: '',
  list: '',
  item: '',
  itemLink: '',
};

interface Props {
  className?: ClassName
  onClick?: () => void
}

export const Nav: React.FC<Props> = ({
  className = defaultClassName,
  onClick = () => {},
}) => {
  const {
    nav,
    list,
    item,
    itemLink,
  } = className;

  const getClassLink = ({ isActive }: { isActive: boolean }): string => {
    return `nav__item-link ${itemLink} ${
      isActive
        ? 'nav__item-link--active'
        : ''
    }`;
  };

  return (
    <nav className={`nav ${nav}`}>
      <ul className={`nav__list ${list}`}>
        <li className={`nav__item ${item}`}>
          <NavLink
            to="/"
            className={getClassLink}
            onClick={onClick}
          >
            Home
          </NavLink>
        </li>

        <li className={`nav__item ${item}`}>
          <NavLink
            to="/phones"
            className={getClassLink}
            onClick={onClick}
          >
            Phones
          </NavLink>
        </li>

        <li className={`nav__item ${item}`}>
          <NavLink
            to="/tablets"
            className={getClassLink}
            onClick={onClick}
          >
            Tablets
          </NavLink>
        </li>

        <li className={`nav__item ${item}`}>
          <NavLink
            to="/accessories"
            className={getClassLink}
            onClick={onClick}
          >
            Accessories
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
