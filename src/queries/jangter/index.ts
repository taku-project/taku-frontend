import { useMutation, useQuery } from '@tanstack/react-query';

import { createProduct, getProductDetail } from '@/services/jangter';
import type { CreateProductRequest } from '@/types/api/jangter.types';

export const useCreateProduct = () => {
  return useMutation({
    mutationFn: async (requestBody: CreateProductRequest) => {
      createProduct(requestBody);
    },
    onSuccess: (data) => {
      // 요청 성공 시 실행할 로직
      console.log('Mutation succeeded:', data);
    },
    onError: (error) => {
      // 요청 실패 시 실행할 로직
      console.error('Mutation failed:', error);
    },
    onSettled: () => {
      // 요청 완료 후 (성공/실패 관계없이) 실행할 로직
      console.log('Muta');
    },
  });
};

export const useProductDetails = (productId: number) => {
  return useQuery({
    queryKey: ['productDetails', productId],
    queryFn: () => getProductDetail(productId),
    enabled: !!productId,
    staleTime: 1000 * 60 * 5,
    retry: 2,
  });
};
