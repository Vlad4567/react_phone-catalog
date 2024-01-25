import classNames from 'classnames';
import './Header.scss';
import { useLockedBody } from 'usehooks-ts';
import { Nav } from '../Nav/Nav';
import { NavIcons } from '../NavIcons/NavIcons';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import * as menuSlice from '../../features/menuSlice';
import { Logo } from '../Logo/Logo';

export const Header: React.FC = () => {
  const { shown } = useAppSelector(state => state.menuSlice);
  const dispatch = useAppDispatch();
  const [locked, setLocked] = useLockedBody(false, 'root');

  const handleMenuClick = () => {
    dispatch(menuSlice.toggle());
    setLocked(!locked);
  };

  return (
    <header className="header" id="header">
      <div className="header__left-side">
        <Logo className="header__logo" />

        <Nav />
      </div>

      <div className="header__right-side">
        <NavIcons
          className={{
            navLink: 'header__block-icon',
            navLinkActive: 'header__block-icon--active',
          }}
        />

        {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
        <button
          type="button"
          className={classNames('header__block-icon header__block-icon--menu', {
            'header__block-icon--active': shown,
          })}
          onClick={handleMenuClick}
        >
          <i
            className={classNames('icon', {
              'icon--menu': !shown,
              'icon--close': shown,
            })}
          />
        </button>
      </div>
    </header>
  );
};
