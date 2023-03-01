import { publicApi } from '../axios';

export const getFeaturedProducts = async () => {
  const { data } = await publicApi.get('/products/featured');
  return data;
};



export const getProductById = async (id) => {
  const { data } = await publicApi.get(`/products/${id}`);
  return data;
};

export const getCarouselProducts = async () => {
  const { data } = await publicApi.get('/products/carousel');
  return data;
};
