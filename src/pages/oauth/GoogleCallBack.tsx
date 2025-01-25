import { useEffect } from 'react';

import { useSearchParams } from 'react-router-dom';

import LoadingSpinner from '@/components/loading/LoadingSpinner';
import { GOOGLE_REDIRECT_URL } from '@/constants/api/oauth';
import { kakaoLogin } from '@/services/auth';

const GoogleCallBack = () => {
  const [searchParams] = useSearchParams();

  const code = searchParams.get('code');
  console.log(code);
  useEffect(() => {
    if (code) {
      const response = kakaoLogin({ code, redirectURL: GOOGLE_REDIRECT_URL });
      console.log(response);
    }
  }, [code]);

  return (
    <div>
      {`구글 로그인 code: ${code}`}
      <LoadingSpinner />
    </div>
  );
};

export default GoogleCallBack;
