import { CommonResponse } from './common.types';

export type WeeklyStats = {
  averagePrice?: number;
  highestPrice?: number;
  lowestPrice?: number;
  totalDeals?: number;
};

export type WeeklyStatsResponse = CommonResponse<WeeklyStats>;

export type WeeklyStatsProps = {
  stats: WeeklyStats;
};
