import axios from 'axios';
import { baseUrl } from '.';

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
