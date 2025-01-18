import {
  Bookmark,
  EllipsisVertical,
  Heart,
  LucideShare,
  Pencil,
  Trash2,
} from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

import { Badge } from '@/components/ui/badge';
import { Button, buttonVariants } from '@/components/ui/button';
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Separator } from '@/components/ui/separator';
import {
  cn,
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
  imageUrlList: [
    'https://fastly.picsum.photos/id/64/200/200.jpg?hmac=lJVbDn4h2axxkM72s1w8X1nQxUS3y7li49cyg0tQBZU',
    'https://picsum.photos/200',
  ],
};

const MarketDetailPage = () => {
  const { id } = useParams();
  const handleChat = () => {
    console.log(id);
  };
  const handleLike = () => {
    console.log('하트');
  };
  const isOwnPost = true;
  const { title, description, price, createdAt, viewCount, imageUrlList } =
    PRODUCT_DETAIL_DUMMY;

  return (
    <div className="mx-auto w-full max-w-[1240px] py-20">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        <section>
          <div className="h-auto w-full">
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
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold">{title}</h1>
              <div className="flex gap-2">
                {isOwnPost && (
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <div
                        className={cn(
                          buttonVariants({ variant: 'ghost' }),
                          'h-10 w-10 rounded-full',
                        )}
                      >
                        <EllipsisVertical />
                      </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem
                        onClick={() => {}}
                        className="cursor-pointer"
                      >
                        <Pencil />
                        수정
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => {}}
                        className="cursor-pointer"
                      >
                        <Trash2 />
                        삭제
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                )}

                <Button
                  variant={'ghost'}
                  onClick={handleLike}
                  className="h-10 w-10 rounded-full"
                >
                  <Bookmark fill="#facc15" className="text-yellow-400" />
                </Button>
              </div>
            </div>
            <h2 className="text-gray-400">{createdAt}</h2>
            <div className="flex gap-2">
              <Link to={'/'}>
                <Badge variant={'outline'} className="hover:bg-accent">
                  카테고리1
                </Badge>
              </Link>
              <Link to={'/'}>
                <Badge variant={'outline'} className="hover:bg-accent">
                  카테고리2
                </Badge>
              </Link>
              <Link to={'/'}>
                <Badge variant={'outline'} className="hover:bg-accent">
                  카테고리3
                </Badge>
              </Link>
            </div>
            <h3 className="mt-2 text-2xl font-bold">
              {formatCurrency(price as number)}
            </h3>
          </div>
          <div>
            <span className="flex items-center text-sm text-[#B0B3BA]">
              <Bookmark width={12} hanging={12} className="mr-1 inline" />
              {`북마크 ${formatLargeNumber(viewCount as number)}`}
              {' · '}
              {`조회 ${formatLargeNumber(viewCount as number)}`}
            </span>
          </div>
          <div className="flex items-center justify-between gap-4">
            <Button
              variant={'ghost'}
              onClick={handleLike}
              className="h-10 w-10 rounded-full"
            >
              <Heart fill="#ef4444" className="text-red-500" />
            </Button>
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
        <h4 className="mb-8 text-2xl font-bold">상품 정보</h4>
        <div>
          <p className="text-lg">{description}</p>
        </div>
      </section>
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
