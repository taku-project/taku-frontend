import axios from 'axios';

const ducku = axios.create({
  baseURL: 'https://api-duckwho.xyz',
  headers: {
    'Content-Type': 'application/json',
  },
});

const duckuWithAuthJSON = axios.create({
  baseURL: 'https://api-duckwho.xyz',
  headers: {
    'Content-Type': 'application/json',
  },
});

duckuWithAuthJSON.interceptors.request.use((config) => {
  const token = import.meta.env.VITE_KAKAO_ACESS_TOKEN;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

const duckuWithAuthFormData = axios.create({
  baseURL: 'https://api-duckwho.xyz',
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});

duckuWithAuthFormData.interceptors.request.use((config) => {
  const token = import.meta.env.VITE_KAKAO_ACESS_TOKEN;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export { ducku, duckuWithAuthFormData, duckuWithAuthJSON };
