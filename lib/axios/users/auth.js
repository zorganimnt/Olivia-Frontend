import { publicApi } from '..';

//login api return token
export const userLogin = async (user) => {
  const { data } = await publicApi.post('/auth/login', user);
  return data;
};

//logout api return token
export const userRegister = async (userData) => {
  const { data } = await publicApi.post('/auth/register', userData);
  return data;
};

//logout api return token
export const userLogout = async () => {
  const { data } = await publicApi.post('/auth/logout');
  return data;
};
