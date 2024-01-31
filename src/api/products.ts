import { Product, ProductDetails } from '../types/product';
import { client } from '../utils/axiosClient';

export const getProducts = () => {
  return client.get<Product[]>('/products.json');
};

export const getProductDetails = (id: Pick<Product, 'itemId'>) => {
  return client.get<ProductDetails>(`/products/${id}.json`);
};

export const getHotPriceProducts = (): Promise<Product[]> => {
  return getProducts()
    .then(items => {
      return items
        .filter(item => {
          return item.price !== item.fullPrice;
        })
        .sort((a, b) => {
          return b.price - a.price;
        });
    });
};
