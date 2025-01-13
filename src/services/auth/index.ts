import ducku from '@/lib/axiosInstance';
import { LogoutSuccessResponse } from '@/types/api/auth.types';

export const logout = async (): Promise<LogoutSuccessResponse> => {
  const response = await ducku.post('api/auth/logout');

  return response;
};
