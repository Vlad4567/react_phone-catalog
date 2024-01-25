import classNames from 'classnames';
import './Button.scss';

/* eslint-disable react/button-has-type */
interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode
  active: boolean
}

export const Button: React.FC<Props> = ({
  children,
  className,
  active,
  ...rest
}) => {
  return (
    <button
      className={classNames(`button ${className}`, {
        'button--active': active,
      })}
      {...rest}
    >
      {children}
    </button>
  );
};
