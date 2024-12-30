import { useEffect, useState } from 'react';

import { Search } from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import SectionLayout from '@/layout/SectionLayout';

const TEST_TOKEN =
  'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjEsIm5pY2tuYW1lIjoibG9vY28iLCJwcm92aWRlclR5cGUiOiJLQUtBTyIsInByb2ZpbGVJbWciOiJodHRwczovL2R1Y2t3aG8tdmlkZW8uY2U0MDBhY2YwYThlYzg3MjY1YzhmZGE2ZWM2OGY5NTkucjIuY2xvdWRmbGFyZXN0b3JhZ2UuY29tL2E2ZDkwMGQyLWVhYzUtNDllMS04MTNlLWYxY2QzNmY4MDk1Yi5qcGciLCJzdGF0dXMiOiJBQ1RJVkUiLCJkb21lc3RpY0lkIjoic2VzOTg5MkBuYXZlci5jb20iLCJnZW5kZXIiOiJNRU4iLCJjcmVhdGVkQXQiOiIyMDI0LTEyLTE1VDE5OjM3OjE1LjA3NzU4NSIsInVwZGF0ZWRBdCI6IjIwMjQtMTItMTVUMTk6Mzc6MTUuMDc3NTg1Iiwicm9sZSI6IlJPTEVfVVNFUiIsImVtYWlsIjoic2VzOTg5MkBuYXZlci5jb20iLCJ0eXBlIjoiQUNDRVNTIiwiaWF0IjoxNzM0MzUyMDEzLCJleHAiOjE3MzY5NDQwMTN9.BHwwjp0X6SsZswgkY8qqImEfFWZ2McuRBnlofPsKlFw';

const CommunityPage = () => {
  // 필터링을 위한 상태
  const [filterArray, setFilterArray] = useState([
    {
      key: 'latest',
      name: '최신순',
    },
    {
      key: 'likes',
      name: '좋아요순',
    },
    {
      key: 'views',
      name: '조회수순',
    },
  ]);

  // 선택된 필터 상태
  const [selectedFilter, setSelectedFilter] = useState<string>('latest');

  const [selectedPage, setSelectedPage] = useState<number>(1);

  const getPosts = () => {
    // http://api-duckwho.xyz/api/posts?filter=latest&lastValue=0&limit=20&keyword=string&categoryId=0&asc=true

    const url = 'https://api-duckwho.xyz/api/posts';
    const params: any = {
      filter: selectedFilter,
      lastValue: 0,
      limit: 20,
      keyword: '',
      categoryId: 0,
      asc: true,
    };

    const queryString = new URLSearchParams(params).toString();

    fetch(`${url}?${queryString}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${TEST_TOKEN}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getPosts();
  }, [selectedFilter]);

  return (
    <>
      <div>
        <aside></aside>
        <SectionLayout>
          {/* Search Bar max 560px */}
          <div className="relative mx-auto my-[80px] max-w-[560px]">
            <Search className="absolute right-5 top-1/2 h-4 w-4 -translate-y-1/2 transform text-muted-foreground" />
            <Input placeholder="검색하기..." className="rounded-full pl-5" />
          </div>

          {/* Popular Categories */}
          <section className="mb-12">
            <h2 className="mb-6 text-2xl font-semibold">인기 카테고리</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {Array.from({ length: 4 }).map((_, i) => (
                // hover시 약간 커짐
                <div
                  key={i}
                  className="transform space-y-2 transition-transform hover:scale-105"
                >
                  <Card className="aspect-video cursor-pointer bg-[#d3d3d3] transition-opacity hover:opacity-90">
                    <CardContent className="h-full p-0" />
                  </Card>
                  <div className="space-y-1">
                    {/* 제목 최대 2줄 표시 넘어가면 ... */}
                    <h3 className="line-clamp-2 font-medium">카테고리</h3>
                    <p className="text-sm text-muted-foreground">장르</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Search Results */}
          <section>
            <h2 className="mb-6 text-xl font-medium">
              <span className="font-bold text-[#9333EA]">N</span> 개의
              커뮤니티가 검색됐다!
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="space-y-2">
                  <Card className="aspect-video cursor-pointer bg-[#d3d3d3] transition-opacity hover:opacity-90">
                    <CardContent className="h-full p-0" />
                  </Card>
                  <div className="space-y-1">
                    <h3 className="font-medium">카테고리</h3>
                    <p className="text-sm text-muted-foreground">장르</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
          <div className="mt-12">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </SectionLayout>
      </div>
    </>
  );
};

export default CommunityPage;
