import { useMutation } from '@tanstack/react-query';

// import { useNavigate } from 'react-router-dom';

import { registerUser } from '@/services/user';
import type { RegisterUserRequest } from '@/types/api/user.types';

export const useRegisterUser = () => {
  // const navigate = useNavigate();

  return useMutation({
    mutationFn: async ({
      requestBody,
      code,
    }: {
      requestBody: RegisterUserRequest;
      code: string;
    }) => {
      return registerUser(requestBody, code);
    },
    onSuccess: (data) => {
      // 요청 성공 시 실행할 로직
      console.log(data);

      // navigate(`/market/${productId}`);
    },
    onError: (error) => {
      // 요청 실패 시 실행할 로직
      console.error('Mutation failed:', error);
    },
    onSettled: () => {
      // 요청 완료 후 (성공/실패 관계없이) 실행할 로직
    },
  });
};
