import { useDocumentTitle } from 'usehooks-ts';
import './HomePage.scss';
import { useEffect, useState } from 'react';
import { ProductsSlider } from '../../components/ProductsSlider/ProductsSlider';
import { Product } from '../../types/product';
import { getHotPriceProducts } from '../../api/products';

export const HomePage: React.FC = () => {
  const [products, setProducts] = useState<Product[] | null>(null);

  useDocumentTitle('Home');

  useEffect(() => {
    getHotPriceProducts()
      .then((items) => setProducts(items));
  }, []);

  return (
    <>
      HomePage
      {products && <ProductsSlider products={products} />}
    </>
  );
};
