import React from 'react';
import withRefreshToken from './components/containers/refresh-hoc';
import Navigation from './navigation';
import AuthStoreProvider from './store/auth-store';
import axios from 'axios';
import { Toaster } from 'react-hot-toast';

export const authAxios = axios.create({
  baseURL: 'http://localhost:5000/api',
});

const App = ({ accessToken, setAccessToken }) => {
  authAxios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
  return (
    <AuthStoreProvider
      accessToken={accessToken}
      setAccessToken={setAccessToken}
    >
      <Navigation />
      <Toaster position='top-center' reverseOrder={false} />
    </AuthStoreProvider>
  );
};

export default withRefreshToken(App);
