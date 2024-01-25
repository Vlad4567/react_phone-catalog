import { CSSTransition } from 'react-transition-group';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import * as menuSlice from '../../features/menuSlice';
import { Nav } from '../Nav/Nav';
import { NavIcons } from '../NavIcons/NavIcons';
import './Menu.scss';

export const Menu: React.FC = () => {
  const { shown } = useAppSelector(state => state.menuSlice);
  const dispatch = useAppDispatch();

  const closeMenu = () => dispatch(menuSlice.toggle());

  return (
    <CSSTransition
      in={shown}
      timeout={300}
      unmountOnExit
      classNames="menu"
    >
      <aside className="menu">
        <Nav
          className={{
            nav: 'menu__nav',
            list: 'menu__nav-list',
            item: 'menu__nav-item',
          }}
          onClick={closeMenu}
        />

        <div className="menu__bottom">
          <NavIcons
            className={{
              navLink: 'menu__bottom-item',
            }}
            onClick={closeMenu}
          />
        </div>
      </aside>
    </CSSTransition>
  );
};
