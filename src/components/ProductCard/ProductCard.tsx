import { Product } from '../../types/product';
import { Button } from '../Button/Button';
import './ProductCard.scss';
import { ButtonFavourites } from '../ButtonFavourites/ButtonFavourites';
import { useToggleItemInArrayLocalStorage } from '../../helpers/hooks';

interface Props {
  card: Product,
}

export const ProductCard: React.FC<Props> = ({ card }) => {
  const [cart, toggleCard]
    = useToggleItemInArrayLocalStorage<Product['id']>('cart');
  const [favourites, toggleFavourite]
    = useToggleItemInArrayLocalStorage<Product['id']>('favourites');
  const {
    name,
    fullPrice,
    price,
    screen,
    capacity,
    ram,
    image,
  } = card;

  const hasStorageCart = cart.some((e) => e === card.id);
  const hasFavourite = favourites.some((e) => e === card.id);

  const changeCardPath = (item: string): string => {
    const saveItem = item.split('/');

    saveItem.unshift('_new');

    return saveItem.join('/');
  };

  return (
    <article className="product-card">
      <div className="product-card__image-block">
        <img
          src={changeCardPath(image)}
          className="product-card__image"
          alt={name}
        />
      </div>

      <p className="product-card__name">{name}</p>

      <div className="product-card__price-block">
        <h3 className="product-card__price">
          {`$${price}`}
        </h3>

        {price === fullPrice || (
          <h3 className="product-card__price-discount">
            {`$${fullPrice}`}
          </h3>
        )}
      </div>

      <hr className="product-card__hr" />

      <div className="product-card__info-block">
        <div className="product-card__info">
          <small className="product-card__info-title">Screen</small>

          <small className="product-card__info-data">{screen}</small>
        </div>

        <div className="product-card__info">
          <small className="product-card__info-title">Capacity</small>

          <small className="product-card__info-data">{capacity}</small>
        </div>

        <div className="product-card__info">
          <small className="product-card__info-title">RAM</small>

          <small className="product-card__info-data">{ram}</small>
        </div>
      </div>

      <div className="product-card__btns">
        <Button
          active={hasStorageCart}
          onClick={() => toggleCard(card.id)}
          className="product-card__add-to-cart"
        >
          {hasStorageCart ? 'Added' : 'Add to cart'}
        </Button>

        <ButtonFavourites
          active={hasFavourite}
          onClick={() => toggleFavourite(card.id)}
        />
      </div>
    </article>
  );
};
