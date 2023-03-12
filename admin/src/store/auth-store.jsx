import { useMutation } from '@tanstack/react-query';
import jwtDecode from 'jwt-decode';
import React, { createContext, useContext, useState } from 'react';
import { customToast } from '../components/ui/custom-toast';
import { publicApi } from '../lib';
import { userLogin } from '../lib/auth/auth';
import { setError } from '../utils/error-handler';

const AuthStore = createContext({
  loading: false,
  isAuth: false,
  loginHandler: () => {},
  logoutHandler: () => {},
  setAccessToken: () => {},
  accessToken: null,
  userInfo: {},
});

export const useAuthStore = () => useContext(AuthStore);

const AuthStoreProvider = ({ children, accessToken, setAccessToken }) => {
  const [isAuth, setIsAuth] = useState(
    localStorage.getItem('dashboardConnected') ? true : false
  );
  const [userInfo, setUserInfo] = useState(() => {
    if (accessToken) {
      const decode = jwtDecode(accessToken);

      return decode.userInfo;
    }

    return null;
  });

  //Login user
  const userLoginMutation = useMutation({
    mutationKey: ['userlogin'],
    mutationFn: userLogin,
  });

  const loginHandler = (credentials) => {
    userLoginMutation.mutate(credentials, {
      onError(error) {
        customToast('error', setError(error));
      },
      onSuccess(data) {
        setAccessToken(data.token);
        const decode = jwtDecode(data.token);
        setUserInfo(decode.userInfo);
        setIsAuth(true);
        localStorage.setItem('dashboardConnected', 'dashboardConnected');
      },
    });
  };

  const logoutHandler = async () => {
    const res = await publicApi.post('/auth/logout');

    if (res.status === 200) {
      localStorage.removeItem('dashboardConnected');
      setIsAuth(false);
      setUserInfo(null);
      setAccessToken(null);
    }
  };

  const values = {
    loading: userLoginMutation.isLoading,
    loginHandler,
    logoutHandler,
    isAuth,
    userInfo,
    setAccessToken,
    accessToken,
  };
  return <AuthStore.Provider value={values}>{children}</AuthStore.Provider>;
};

export default AuthStoreProvider;
