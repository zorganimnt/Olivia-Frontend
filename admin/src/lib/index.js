import axios from 'axios';

// base backend url
export const baseUrl = 'http://localhost:5000/api';

//public axios instance
export const publicApi = axios.create({
  baseURL: baseUrl,
  withCredentials: true,
});
