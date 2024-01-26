import { Link } from 'react-router-dom';
import './Footer.scss';
import { Logo } from '../Logo/Logo';

const scrollUp = () => window.scroll({
  top: 0,
  behavior: 'smooth',
});

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <Logo />

      <nav className="footer__nav">
        <ul className="footer__nav-list">
          <li className="footer__nav-item">
            <Link
              to="https://github.com/Vlad4567/react_phone-catalog"
              className="footer__nav-item-link"
            >
              Github
            </Link>
          </li>
          <li className="footer__nav-item">
            <Link
              to="https://github.com/Vlad4567"
              className="footer__nav-item-link"
            >
              Contacts
            </Link>
          </li>
          <li className="footer__nav-item">
            <Link to="/rights" className="footer__nav-item-link">Rights</Link>
          </li>
        </ul>
      </nav>

      <div className="footer__block-back">
        <label className="footer__block-back-title-label" htmlFor="button-back">
          <small className="footer__block-back-title">Back to top</small>
        </label>

        {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
        <button
          type="button"
          id="button-back"
          onClick={scrollUp}
          className="footer__block-back-button"
        >
          <i className="icon icon--arrow-up footer__arrow-up" />
        </button>
      </div>
    </footer>
  );
};
