import { authAxios } from '../../App';

export const getUsersList = async (filter) => {
  const { data } = await authAxios.get(
    `/users?query=${filter.query}&page=${filter.page}`
  );
  return data;
};

export const getUserById = async (id) => {
  const { data } = await authAxios.get(`/users/${id}`);
  return data;
};

export const deleteUser = async (id) => {
  const { data } = await authAxios.delete(`/users/${id}`);
  return data;
};

export const updateUser = async (user) => {
  const { data } = await authAxios.puy(`/users/${user._id}`, user);
  return data;
};

export const createUser = async (user) => {
  const { data } = await authAxios.post('/users', user);
  return data;
};
