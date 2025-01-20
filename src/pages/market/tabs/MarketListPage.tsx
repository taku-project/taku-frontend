import { Link } from 'react-router-dom';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const MarketListPage = () => {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold">상품 조회/검색 탭 입니다.</h1>
      </div>
      <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Array.from(new Array(41))
          .map((_, i) => i + 1)
          .map((num: number) => (
            <Link to={`/market/${num}`} key={num}>
              <Card>
                <div className="relative aspect-square w-full overflow-hidden">
                  <img
                    className="w-full object-cover transition-transform duration-300 hover:scale-110"
                    src="https://fastly.picsum.photos/id/1051/200/200.jpg?hmac=s6d4ypEjpec8nvA2zqhWzx_6ogXYM2fJ_YJwaOM1CUA"
                    alt=""
                  />
                </div>
                <CardHeader className="p-4">
                  <CardDescription>
                    한섬 타임 TIME 캐시미어 100% 코트
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-4 pb-4">
                  <CardTitle className="">22000원</CardTitle>
                </CardContent>
                <CardFooter className="px-4 pb-4">
                  <span className="text-gray-400">3초 전</span>
                </CardFooter>
              </Card>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default MarketListPage;
