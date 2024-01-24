import { Product, ProductDetails } from '../types/product';
import { client } from '../utils/axiosClient';

export const getProducts = () => {
  return client.get<Product[]>('/products.json');
};

export const getProductDetails = (id: Pick<Product, 'id'>) => {
  return client.get<ProductDetails>(`/products/${id}.json`);
};
