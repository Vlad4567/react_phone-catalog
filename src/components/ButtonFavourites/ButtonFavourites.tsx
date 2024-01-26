import classNames from 'classnames';
import './ButtonFavourites.scss';

/* eslint-disable react/button-has-type */
interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active: boolean
}

export const ButtonFavourites: React.FC<Props> = ({
  className,
  active,
  ...rest
}) => {
  return (
    <button
      className={classNames(`button-favourites ${className}`, {
        'button-favourites--active': active,
      })}
      {...rest}
    >
      <i
        className={classNames(`icon ${className}`, {
          'icon--favourites': !active,
          'icon--favourites-filled': active,
        })}
      />
    </button>
  );
};
