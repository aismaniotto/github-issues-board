import axios from 'axios';
import { getAccessToken } from '../local-storage-service';

const baseApi = axios.create({
  baseURL: 'https://api.github.com',
});

baseApi.interceptors.request.use(async (config) => {
  const token = getAccessToken();
  if (token) {
    config.headers.Authorization = `token ${token}`;
  }
  return config;
});

export default baseApi;
