import {
  Bookmark,
  EllipsisVertical,
  Heart,
  LucideShare,
  Pencil,
  Trash2,
} from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

import { ProductDetailSkeleton } from '@/components/loading/jangter/ProductDetailSkeleton';
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
import { CATEGORY_MAP } from '@/constants/jangter';
import {
  cn,
  formatCurrency,
  formatKoreanDate,
  formatLargeNumber,
  shareCurrentURL,
} from '@/lib/utils';
import { useProductDetails } from '@/queries/jangter';
import type { FindProductDetailSuccessResponse } from '@/types/api/jangter.types';

type ProductDetail = Exclude<
  FindProductDetailSuccessResponse['data'],
  undefined
>;
interface ProductDetailResponse extends FindProductDetailSuccessResponse {
  data: ProductDetail;
}

const MarketDetailPage = () => {
  const { id } = useParams();
  const productId = Number(id);
  const { data, isLoading, error } = useProductDetails(productId!);

  if (isLoading) return <ProductDetailSkeleton />;

  if (error) return <div>오류가 발생했습니다...</div>;

  const { data: productDetailData } = data as ProductDetailResponse;

  const {
    title,
    description,
    price,
    createdAt,
    viewCount,
    imageUrlList,
    itemCategoryId,
    userId,
  } = productDetailData;
  const handleChat = () => {
    console.log(id);
  };
  const handleLike = () => {
    console.log('하트');
  };
  const isOwnPost = !((userId as number) % 2);

  return (
    <div className="mx-auto w-full max-w-[1240px]">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        <section>
          <div>
            {imageUrlList && !!imageUrlList.length && (
              <Carousel>
                <CarouselContent>
                  {imageUrlList.map((imageUrl, index) => (
                    <CarouselItem
                      key={imageUrl}
                      className="relative aspect-square w-full"
                    >
                      <img
                        className="absolute inset-0 object-cover"
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
            )}
            {(imageUrlList && !!imageUrlList.length) || (
              <div className="flex aspect-square w-full items-center justify-center bg-gray-200">
                등록된 상품 이미지가 없습니다...
              </div>
            )}
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
                      <Link to={`/market/${productId}/edit`}>
                        <DropdownMenuItem className="cursor-pointer">
                          <Pencil />
                          수정
                        </DropdownMenuItem>
                      </Link>
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
            <h2 className="text-gray-400">
              {formatKoreanDate(createdAt as string)}
            </h2>
            <div className="flex gap-2">
              <Badge variant={'outline'} className="hover:bg-accent">
                {CATEGORY_MAP[itemCategoryId as number]}
              </Badge>
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
