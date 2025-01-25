export const KAKAO_REST_API_KEY = import.meta.env.VITE_KAKAO_REST_API_KEY;
export const KAKAO_REDIRECT_URL = import.meta.env.VITE_KAKAO_REDIRECT_URL;

export const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;
export const GOOGLE_REDIRECT_URL = import.meta.env.VITE_GOOGLE_REDIRECT_URL;

const scope =
  'https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email';

export const KAKAO_OAUTH_URI = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_REST_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URL}&response_type=code`;
export const GOOGLE_OAUTH_URI = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${GOOGLE_CLIENT_ID}&redirect_uri=${GOOGLE_REDIRECT_URL}&response_type=code&scope=${scope}`;
