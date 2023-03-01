import React from 'react';
import withRefreshToken from './components/containers/refresh-hoc';
import Navigation from './navigation';
import AuthStoreProvider from './store/auth-store';
import { Toaster } from 'react-hot-toast';

const App = ({ accessToken }) => {
  return (
    <AuthStoreProvider accessToken={accessToken}>
      <Navigation />
      <Toaster position='top-right' reverseOrder={false} />
    </AuthStoreProvider>
  );
};

export default withRefreshToken(App);
