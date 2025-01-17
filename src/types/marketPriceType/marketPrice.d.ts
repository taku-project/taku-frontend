import { CommonResponse } from './common';
import { SimilarProductResponseDTO } from './similarProduct';
import { WeeklyStatsResponseDTO } from './weeklyStats';

export type PriceDataPoint = {
  date?: string;
  productId?: number;
  title?: string;
  registeredPrice?: number;
  soldPrice?: number;
  dealCount?: number;
};

export type PriceGraphResponseDTO = {
  dataPoints?: PriceDataPoint[];
};

export type MarketPriceSearchResponseDTO = {
  keyword?: string;
  priceGraph?: PriceGraphResponseDTO;
  weeklyStats?: WeeklyStatsResponseDTO;
  similarProducts?: SimilarProductResponseDTO[];
};

export type PriceGraphResponse = CommonResponse<PriceGraphResponseDTO>;

export type MarketPriceSearchResponse =
  CommonResponse<MarketPriceSearchResponseDTO>;

export type MarketPriceProps = {
  keyword: string;
  graph: PriceGraphResponseDTO;
  stats: WeeklyStatsResponseDTO;
  products: SimilarProductResponseDTO[];
};
