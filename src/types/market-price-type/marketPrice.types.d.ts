import { CommonResponse } from './common.types';
import { SimilarProduct } from './similarProduct';
import { WeeklyStats } from './weeklyStats';

export type PriceDataPoint = {
  date?: string;
  productId?: number;
  title?: string;
  registeredPrice?: number;
  soldPrice?: number;
  dealCount?: number;
};

export type PriceGraph = {
  dataPoints?: PriceDataPoint[];
};

export type MarketPriceSearch = {
  keyword?: string;
  priceGraph?: PriceGraph;
  weeklyStats?: WeeklyStats;
  similarProducts?: SimilarProduct[];
};

export type PriceGraphResponse = CommonResponse<PriceGraph>;

export type MarketPriceSearchResponse = CommonResponse<MarketPriceSearch>;

export type MarketPriceProps = {
  keyword: string;
  graph: PriceGraph;
  stats: WeeklyStats;
  products: SimilarProduct[];
};

export type Period = '1일' | '1주일';
