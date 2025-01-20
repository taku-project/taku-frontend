import { CommonResponse } from './common.types';

export type SimilarProduct = {
  productId?: number;
  title?: string;
  price?: number;
  tfidfVector?: string;
  imageUrl?: string;
};

export type SimilarProductListResponse = CommonResponse<SimilarProduct[]>;

export type SimilarProductProps = {
  products: SimilarProduct[];
};
