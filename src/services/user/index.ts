import { ducku } from '@/lib/axiosInstance';
import type {
  RegisterUserRequest,
  RegisterUserSuccessResponse,
} from '@/types/api/user.types';

export const registerUser = async (
  requestBody: RegisterUserRequest,
  code: string,
): Promise<RegisterUserSuccessResponse> => {
  const { data } = await ducku.post('/api/user', requestBody, {
    headers: {
      'X-Registration-Token': `Bearer ${code}`,
      Authorization: `Bearer ${code}`,
    },
  });
  return data;
};
