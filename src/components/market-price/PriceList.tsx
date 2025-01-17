import { TrendingDown, TrendingUp } from 'lucide-react';

import { cn } from '@/lib/utils';

interface PriceListProps {
  selectedPeriod: '1일' | '1주일';
  setSelectedPeriod: (period: '1일' | '1주일') => void;
  priceData: any; // 타입 정의 필요
}

export const PriceList = ({
  selectedPeriod,
  setSelectedPeriod,
  priceData,
}: PriceListProps) => {
  const latestData =
    priceData.data.priceGraph.dataPoints[
      priceData.data.priceGraph.dataPoints.length - 1
    ];
  const previousData =
    priceData.data.priceGraph.dataPoints[
      priceData.data.priceGraph.dataPoints.length - 2
    ];

  const priceDiff = latestData.registeredPrice - previousData.registeredPrice;
  const priceChangePercent = (
    (priceDiff / previousData.registeredPrice) *
    100
  ).toFixed(2);

  return (
    <div>
      {/* 가격 정보 */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">원피스 루피 피규어</h2>
        {/* 가격 표시 */}
        <div className="flex space-x-16">
          <div className="flex items-end gap-2">
            <span className="text-[40px] font-bold text-blue-500">
              {latestData.registeredPrice.toLocaleString()}
            </span>
            <span className="mb-1 text-[28px] text-blue-500">원</span>
            <div className="mb-2 flex items-center gap-1">
              {priceDiff >= 0 ? (
                <TrendingUp className="h-5 w-5 text-blue-500" />
              ) : (
                <TrendingDown className="h-5 w-5 text-blue-500" />
              )}
              <span className="text-blue-500">
                {Math.abs(priceDiff).toLocaleString()} 원
              </span>
              <span className="text-muted-foreground">
                ({priceChangePercent}%)
              </span>
            </div>
          </div>
          <div className="flex items-end gap-2">
            <span className="text-[40px] font-bold text-red-500">100,000</span>
            <span className="mb-1 text-[28px] text-red-500">원</span>
            <div className="mb-2 flex items-center gap-1">
              <TrendingUp className="h-5 w-5 text-red-500" />
              <span className="text-red-500">3,000 원</span>
              <span className="text-muted-foreground">(-n.nn%)</span>
            </div>
          </div>
        </div>

        {/* 기간 탭 */}
        <div className="flex h-[72px] gap-4">
          {['1일', '1주일'].map((period) => (
            <button
              key={period}
              onClick={() => setSelectedPeriod(period as '1일' | '1주일')}
              className={cn(
                'relative pb-2 text-base transition-colors',
                selectedPeriod === period
                  ? 'border-b font-medium text-foreground'
                  : 'text-muted-foreground',
                selectedPeriod === period &&
                  'after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-foreground',
              )}
            >
              {period}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
