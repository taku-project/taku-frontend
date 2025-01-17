import axios from 'axios';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
const TEST_ACCESS_TOKEN = import.meta.env.VITE_GOOGLE_ACCESS_TOKEN;

const ducku = axios.create({
  baseURL: 'https://api-duckwho.xyz',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default ducku;

//테스트용 axios 인스턴스
export const testAxios = axios.create({
  baseURL: BACKEND_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + TEST_ACCESS_TOKEN,
  },
});
