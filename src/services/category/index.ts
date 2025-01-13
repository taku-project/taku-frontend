import { AxiosResponse } from 'axios';

import ducku from '@/lib/axiosInstance';
import { createQueryString } from '@/lib/utils';
import {
  CreateCategoriesRequest,
  CreateCategoriesSuccessResponse,
  FindCategoryByIdSuccessResponse,
  SearchCategoriesQuery,
  SearchCategoriesSuccessResponse,
} from '@/types/api/categories.types';

export const searchCategories = async (
  queryParams: Omit<
    SearchCategoriesQuery,
    'requestCategorySearch' | 'pageable'
  >,
): Promise<SearchCategoriesSuccessResponse> => {
  const queryString = createQueryString(queryParams);
  const { data }: AxiosResponse<SearchCategoriesSuccessResponse> =
    await ducku.get(`/api/category?${queryString}`);

  return data;
};

export const createCategories = async (
  requestBody: CreateCategoriesRequest,
): Promise<CreateCategoriesSuccessResponse> => {
  const { data }: AxiosResponse<CreateCategoriesSuccessResponse> =
    await ducku.post('api/category', requestBody);

  return data;
};

export const findCategoryById = async (
  categoryId: number,
): Promise<FindCategoryByIdSuccessResponse> => {
  const { data }: AxiosResponse<FindCategoryByIdSuccessResponse> =
    await ducku.get(`/api/category/${categoryId}`);

  return data;
};
