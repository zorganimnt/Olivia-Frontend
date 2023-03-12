import { publicApi } from '..';
import { authAxios } from '../../App';

export const getCategories = async () => {
  const { data } = await publicApi.get('/categories');
  return data;
};

export const createCategory = async (category) => {
  const { data } = await authAxios.post('/categories', category);
  return data;
};

export const updateCategory = async (category) => {
  const { data } = await authAxios.put(`/categories/${category._id}`, category);
  return data;
};

export const deleteCategory = async (id) => {
  const { data } = await authAxios.delete(`/categories/${id}`);
  return data;
};
