import { LucideShare } from 'lucide-react';
import { useParams } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Separator } from '@/components/ui/separator';
import {
  formatCurrency,
  formatLargeNumber,
  shareCurrentURL,
} from '@/lib/utils';
import type { FindProductDetailSuccessResponse } from '@/types/api/jangter.types';

type ProductDetail = FindProductDetailSuccessResponse['data'];

const PRODUCT_DETAIL_DUMMY: ProductDetail = {
  title: '코웨이 공기 청정기',
  description: '사용감 많이 없습니다\n필요하신분 편하게 톡 주세요 ',
  price: 70000,
  status: 'ACTIVE',
  createdAt: '3시간 전',
  viewCount: 56,
  imageUrlList: ['https://picsum.photos/200', 'https://picsum.photos/200'],
};

const MarketDetailPage = () => {
  const { id } = useParams();
  const handleChat = () => {
    console.log(id);
  };
  const { title, description, price, createdAt, viewCount, imageUrlList } =
    PRODUCT_DETAIL_DUMMY;

  return (
    <div className="mx-auto w-full max-w-[1240px] py-20">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        <section>
          <div className="h-auto">
            <Carousel className="w-full">
              <CarouselContent>
                {imageUrlList &&
                  imageUrlList.map((imageUrl, index) => (
                    <CarouselItem key={imageUrl}>
                      <img
                        className="h-full w-full object-cover"
                        src={imageUrl}
                        alt={`${index}번째 상품 이미지`}
                      />
                    </CarouselItem>
                  ))}
              </CarouselContent>
              <CarouselPrevious
                variant={'default'}
                className="disabled:hidden"
              />
              <CarouselNext variant={'default'} className="disabled:hidden" />

              <CarouselDots />
            </Carousel>
          </div>
        </section>
        <section className="flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-bold">{title}</h1>
            <h2 className="text-[#B0B3BA]">{createdAt}</h2>
            <h3 className="mt-4 text-2xl font-bold">
              {formatCurrency(price as number)}
            </h3>
          </div>
          <div>
            <p className="text-lg">{description}</p>
          </div>
          <div>
            <span className="text-sm text-[#B0B3BA]">
              {`조회 ${formatLargeNumber(viewCount as number)}`}
            </span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Button onClick={handleChat} className="w-full">
              채팅하기
            </Button>
            <Button
              onClick={shareCurrentURL}
              variant={'outline'}
              className="w-full"
            >
              <LucideShare />
              공유하기
            </Button>
          </div>
        </section>
      </div>
      <Separator className="my-16" />
      <section>
        <h4 className="mb-8 text-2xl font-bold">추천 상품</h4>
        <div className="flex flex-wrap gap-4">
          {[1, 2, 3].map((num: number) => (
            <Card key={num}>
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card Description</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
      <Separator className="my-16" />
      <section>
        <h4 className="mb-8 text-2xl font-bold">판매자의 다른 상품</h4>
        <div className="flex flex-wrap gap-4">
          {[1, 2, 3].map((num: number) => (
            <Card key={num}>
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card Description</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MarketDetailPage;
