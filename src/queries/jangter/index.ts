import { useMutation, useQuery } from '@tanstack/react-query';

import { getProductDetail, createProduct } from '@/services/jangter';

export const createProduct = () => {
  
}

export const useProductDetails = (productId: number) => {
  return useQuery({
    queryKey: ['productDetails', productId],
    queryFn: () => getProductDetail(productId),
    enabled: !!productId,
    staleTime: 1000 * 60 * 5,
    retry: 2,
  });
};
