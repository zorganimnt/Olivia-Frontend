import React, { useState, useEffect } from 'react';
import { publicApi } from '../../lib/axios';
import Loader from '../ui/loader';

const withRefreshToken = (WrappedComponent) => {
  // eslint-disable-next-line react/display-name
  return (props) => {
    const [accessToken, setAccessToken] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    // const [error, setError] = useState<unknown>(null);

    const refreshAccessToken = async () => {
      try {
        setIsLoading(true);
        const { data } = await publicApi.post('/auth/refresh');
        console.log(data);
        setAccessToken(data.token);
        console.log(data.token);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        //  setError(error);
        setIsLoading(false);
      }
    };

    useEffect(() => {
      const refreshToken = localStorage.getItem('isAuthenticated');

      if (!refreshToken) return;

      refreshAccessToken();
    }, []);

    if (isLoading) return <Loader />;

    return <WrappedComponent {...props} accessToken={accessToken} />;
  };
};

export default withRefreshToken;
