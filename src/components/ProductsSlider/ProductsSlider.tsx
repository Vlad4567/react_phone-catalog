/* eslint-disable react/self-closing-comp */
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper/types';
import { ButtonArrow } from '../ButtonArrow/ButtonArrow';
import './ProductsSlider.scss';
import leftArrow from '../../img/icons/Chevron-Arrow-Left.svg';
import rightArrow from '../../img/icons/Chevron-Arrow-Right.svg';
import { Product } from '../../types/product';
import { ProductCard } from '../ProductCard/ProductCard';

interface Props {
  products: Product[]
}

export const ProductsSlider: React.FC<Props> = ({
  products,
}) => {
  return (
    <Swiper
      tag="figure"
      className="swiper"
      spaceBetween="16px"
      slidesPerView="auto"
    >
      <figcaption className="products-slider__uppper-block">
        <ButtonArrow
          disabled={swiperRef.current?.activeIndex === 0}
          onClick={() => swiperRef.current?.slidePrev()}
          img={leftArrow}
        />
        <ButtonArrow
          disabled={swiperRef.current?.allowSlideNext}
          onClick={() => swiperRef.current?.slideNext()}
          img={rightArrow}
        />
      </figcaption>

      <div className="swiper-wrapper">
        {products.map((item) => (
          <SwiperSlide
            key={item.itemId}
            className="swiper-slide"
            style={{ width: 'auto' }}
          >
            <ProductCard card={item} />
          </SwiperSlide>
        ))}
      </div>
    </Swiper>
  );
};
