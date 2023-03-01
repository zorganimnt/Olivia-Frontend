import axios from 'axios';

// base backend url
export const baseUrl = 'http://localhost:5000/api';

//public axios instance
export const publicApi = axios.create({
  baseURL: baseUrl,
  withCredentials: true,
});

//auth axios instance
const authApi = axios.create({
  baseURL: baseUrl,
  withCredentials: true,
});

//send token in headers for every request
export const authorizationProvider = (token) => {
  authApi.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  });
};

export default authApi;
