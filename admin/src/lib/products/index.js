import { publicApi } from '..';
import { authAxios } from '../../App';

export const getProducts = async (filter) => {
  const { data } = await publicApi.get(
    `/products?query=${filter.query}&category=${filter.category}&brand=${filter.brand}&page=${filter.page}`
  );
  return data;
};

export const createProduct = async (product) => {
  const { data } = await authAxios.post('/products', product);
  return data;
};

export const updateProduct = async (product) => {
  const { data } = await authAxios.put(`/products/${product._id}`, product);
  return data;
};

export const deleteProduct = async (id) => {
  const { data } = await authAxios.delete(`/products/${id}`);
  return data;
};
