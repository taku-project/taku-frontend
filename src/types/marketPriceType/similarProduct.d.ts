import { CommonResponse } from './common';

export type SimilarProductResponseDTO = {
  productId?: number;
  title?: string;
  price?: number;
  tfidfVector?: string;
  imageUrl?: string;
};

export type SimilarProductListResponse = CommonResponse<
  SimilarProductResponseDTO[]
>;

export type SimilarProductProps = {
  products: SimilarProductResponseDTO[];
};
