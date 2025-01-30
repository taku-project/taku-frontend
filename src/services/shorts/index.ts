import { AxiosResponse } from 'axios';

import { duckuWithAuthFormData } from '@/lib/axiosInstance';
import { UploadShortsRequest } from '@/types/api/shorts.types';

/*
ex)
export const createProduct = async (
  requestBody: CreateProductRequest,
): Promise<CreateProductSuccessResponse> => {
  const { data } = await duckuWithAuthFormData.post('api/jangter', requestBody);
  return data;
};
*/
export const uploadShorts = async (
  requestBody: UploadShortsRequest,
): Promise<AxiosResponse> => {
  const { data } = await duckuWithAuthFormData.post('api/shorts', requestBody);
  return data;
};
