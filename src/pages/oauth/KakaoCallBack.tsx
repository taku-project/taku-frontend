import { useEffect } from 'react';

import { useNavigate, useSearchParams } from 'react-router-dom';

import LoadingSpinner from '@/components/loading/LoadingSpinner';

const KakaoCallBack = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const code = searchParams.get('code');
  const provider = 'KAKAO';
  useEffect(() => {
    if (code) {
      console.log(code);
      navigate(`/auth/signup?code=${code}&provider=${provider}`);
    }
  }, [code]);

  return (
    <div>
      <LoadingSpinner />
    </div>
  );
};

export default KakaoCallBack;
