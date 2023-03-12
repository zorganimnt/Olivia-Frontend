import { publicApi } from '..';

//login api return token
export const userLogin = async (user) => {
  const { data } = await publicApi.post('/auth/admin-login', user);
  return data;
};
