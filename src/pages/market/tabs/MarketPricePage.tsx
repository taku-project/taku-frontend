import { useState } from 'react';

import { Chart } from '@/components/market-price/Chart';
import { PriceList } from '@/components/market-price/PriceList';
import { RecentlyTradedProduct } from '@/components/market-price/RecentlyTradedProduct';
import { RelatedProduct } from '@/components/market-price/RelatedProduct';

const MarketPricePage = () => {
  const [selectedPeriod, setSelectedPeriod] = useState<'1일' | '1주일'>('1일');

  // Mock 데이터
  const dailyMockData = {
    success: true,
    data: {
      keyword: '나루토',
      priceGraph: {
        dataPoints: [
          { date: [2025, 1, 15, 4], registeredPrice: 41250, soldPrice: 37125 },
          { date: [2025, 1, 15, 8], registeredPrice: 43000, soldPrice: 38700 },
          { date: [2025, 1, 15, 12], registeredPrice: 45000, soldPrice: 40500 },
          { date: [2025, 1, 15, 16], registeredPrice: 47500, soldPrice: 42750 },
          { date: [2025, 1, 15, 20], registeredPrice: 46000, soldPrice: 41400 },
          { date: [2025, 1, 15, 24], registeredPrice: 48500, soldPrice: 43650 },
        ],
      },
    },
  };

  const weeklyMockData = {
    success: true,
    data: {
      keyword: '나루토',
      priceGraph: {
        dataPoints: [
          { date: [2025, 1, 9], registeredPrice: 41250, soldPrice: 37125 },
          { date: [2025, 1, 10], registeredPrice: 45000, soldPrice: 40500 },
          { date: [2025, 1, 11], registeredPrice: 43000, soldPrice: 38700 },
          { date: [2025, 1, 12], registeredPrice: 47500, soldPrice: 42750 },
          { date: [2025, 1, 13], registeredPrice: 46000, soldPrice: 41400 },
          { date: [2025, 1, 14], registeredPrice: 48500, soldPrice: 43650 },
          { date: [2025, 1, 15], registeredPrice: 50000, soldPrice: 45000 },
        ],
      },
    },
  };

  return (
    <div className="flex flex-col space-y-8">
      <PriceList
        selectedPeriod={selectedPeriod}
        setSelectedPeriod={setSelectedPeriod}
        priceData={selectedPeriod === '1일' ? dailyMockData : weeklyMockData}
      />
      <Chart
        data={selectedPeriod === '1일' ? dailyMockData : weeklyMockData}
        period={selectedPeriod}
      />
      <RecentlyTradedProduct />
      <RelatedProduct />
    </div>
  );
};

export default MarketPricePage;
