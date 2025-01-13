import axios from 'axios';

const ducku = axios.create({
  baseURL: 'https://api-duckwho.xyz',
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * 요청 인터셉터
 */

ducku.interceptors.request.use(
  (config) => {
    // 요청 전에 공통 처리 (예: 인증 헤더 추가)
    return config;
  },
  (error) => {
    console.error('axios 요청 중 에러:', error);
    return Promise.reject(error);
  },
);

/**
 * 응답 인터셉터
 */

ducku.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error('axios 응답 중 에러:', error);
    return Promise.reject(error);
  },
);

export default ducku;
