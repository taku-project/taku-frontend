import ducku from '@/lib/axiosInstance';

export const signIn = async (data: { email: string; password: string }) => {
  const response = await ducku.post('', data);
  return response;
};
