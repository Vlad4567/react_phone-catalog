import './ButtonArrow.scss';

/* eslint-disable react/button-has-type */
interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  img: string
}

export const ButtonArrow: React.FC<Props> = ({
  img,
  className = '',
  ...rest
}) => {
  return (
    <button
      className={`button-arrow ${className}`}
      {...rest}
    >
      <img
        className="button-arrow__img"
        src={img}
        alt="arrow"
      />
    </button>
  );
};
