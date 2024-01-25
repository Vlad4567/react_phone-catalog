import { NavLink } from 'react-router-dom';
import './NavIcons.scss';

interface ClassName {
  navLink?: string
  navLinkActive?: string
  icon?: string
}

const defaultClassName: ClassName = {
  navLink: '',
  navLinkActive: '',
  icon: '',
};

interface Props {
  className?: ClassName
  onClick?: () => void
}

export const NavIcons: React.FC<Props> = ({
  className = defaultClassName,
  onClick = () => {},
}) => {
  const {
    navLink,
    navLinkActive,
    icon,
  } = className;

  const getClassBlockIcon = ({ isActive }: { isActive: boolean }) => {
    return `nav-icon__item ${navLink} ${
      isActive
        ? `nav-icon__item--active ${navLinkActive}`
        : ''
    }`;
  };

  return (
    <>
      <NavLink
        to="/favourites"
        className={getClassBlockIcon}
        onClick={onClick}
      >
        <i className={`icon icon--favourites ${icon}`} />
      </NavLink>

      <NavLink
        to="/shopping-bag"
        className={getClassBlockIcon}
        onClick={onClick}
      >
        <i className={`icon icon--shopping-bag ${icon}`} />
      </NavLink>
    </>
  );
};
