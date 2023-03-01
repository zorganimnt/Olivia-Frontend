import { useMutation } from '@tanstack/react-query';
import jwtDecode from 'jwt-decode';
import React, { createContext, useContext, useState } from 'react';
import { customToast } from '../components/ui/custom-toast';
import { publicApi } from '../lib/axios';
import { userLogin } from '../lib/axios/users/auth';
import { setError } from '../utils/error-handler';

const AuthStore = createContext({
  loading: false,
  isAuth: false,
  loginHandler: () => {},
  logoutHandler: () => {},
  userInfo: {},
});

export const useAuthStore = () => useContext(AuthStore);

const AuthStoreProvider = ({ children, accessToken }) => {
  const [isAuth, setIsAuth] = useState(
    localStorage.getItem('isAuthenticated') ? true : false
  );
  const [userInfo, setUserInfo] = useState(() => {
    if (accessToken) {
      const decode = jwtDecode(accessToken);

      if (decode.exp < Date.now() / 1000) {
        // Token is expired
        console.log('Token is expired');
      } else {
        // Token is not expired
        console.log('Token is not expired');
      }
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
        const decode = jwtDecode(data.token);
        setUserInfo(decode.userInfo);
        setIsAuth(true);
        localStorage.setItem('isAuthenticated', 'isAuthenticated');
      },
    });
  };

  const logoutHandler = async () => {
    const res = await publicApi.post('/auth/logout');

    if (res.status === 200) {
      localStorage.removeItem('isAuthenticated');
      setIsAuth(false);
      setUserInfo(null);
    }
  };

  const values = {
    loading: userLoginMutation.isLoading,
    loginHandler,
    logoutHandler,
    isAuth,
    userInfo,
  };
  return <AuthStore.Provider value={values}>{children}</AuthStore.Provider>;
};

export default AuthStoreProvider;
