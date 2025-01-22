import { useQuery } from '@tanstack/react-query';
import { ChevronLeft } from 'lucide-react';
import { useParams } from 'react-router-dom';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { testAxios } from '@/lib/axiosInstance';

const getDetailCategory = async (category: string) => {
  const response = await testAxios.get(`/api/category/${category}`);
  return response.data;
};

type Gerne = {
  id: number;
  name: string;
};

const CommunityCategoryPage = () => {
  const { category } = useParams();

  const { data, status, error } = useQuery({
    queryKey: ['category', category],
    queryFn: () => category && getDetailCategory(category),
  });

  if (status === 'pending') {
    return <div>로딩중...</div>;
  }

  if (status === 'error') {
    return (
      <div>
        에러:
        {error.message
          ? error.message
          : '데이터를 가져오는 중 오류가 발생했습니다'}
      </div>
    );
  }

  return (
    <div>
      <section className="flex items-start justify-between">
        <div className="flex flex-col items-start gap-4">
          <Button variant={'ghost'}>
            <ChevronLeft />
            커뮤니티 목록으로
          </Button>
          <h1 className="text-4xl font-bold text-gray-800">{data.data.name}</h1>
          <div className="flex items-center gap-2">
            {data.data.categoryGenres.map((genre: Gerne) => (
              <Badge key={genre.id} variant={'default'} className="text-lg">
                #{genre.name}
              </Badge>
            ))}
          </div>
        </div>
        <div className="flex items-center space-x-2 bg-slate-500">
          <div className="relative h-72 w-96 rounded-lg">
            <img src="" alt="아무거나" className="h-full w-full" />
            {/* background: linear-gradient(90deg, #000 5%, #000000b3 30%, #00000073 50%, #0003 80%, #0000 100%); */}
            <div className="absolute bottom-0 left-0 h-full w-full bg-gradient-to-t from-white to-transparent to-50%"></div>
            <div className="absolute bottom-0 left-0 h-full w-full bg-gradient-to-r from-white to-transparent to-50%"></div>
          </div>
        </div>
      </section>
      <Separator className="my-4" />
      <div></div>
    </div>
  );
};

export default CommunityCategoryPage;
