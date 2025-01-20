import { ChevronLeft, ChevronRight } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
} from '@/components/ui/pagination';

type PaginationComponentProps = {
  count: number; // 총 페이지 수
  siblingCount?: number; // 현재 페이지 양쪽에 표시할 페이지 수
  page: number; // 현재 페이지
  setPage: React.Dispatch<React.SetStateAction<number>>; // 페이지 변경 함수
};

/**
 * 커스텀 페이지네이션 컴포넌트
 *
 * @param count 총 페이지 수
 * @param siblingCount 현재 페이지 양쪽에 표시할 페이지 수
 * @param page 현재 페이지
 * @param setPage 페이지 변경 함수
 */
const PaginationComponent = ({
  count = 10,
  siblingCount = 5,
  page,
  setPage,
}: PaginationComponentProps) => {
  const showLeftEllipsis = page > siblingCount / 2; // 왼쪽 생략 기호 표시 여부
  const showRightEllipsis = count - page > siblingCount / 2; // 오른쪽 생략 기호 표시 여부
  const getPageNumbers = () => {
    if (count <= siblingCount) {
      return Array.from({ length: count }, (_, i) => i + 1); // 페이지 수가 적을 때 모든 페이지 번호 반환
    } else {
      const half = Math.floor(siblingCount / 2);
      // 현재 페이지가 항상 가운데에 오도록 설정
      let start = page + 1 - half;
      let end = page + 1 + half;
      // 현재 페이지가 시작 부분에 가까울 때
      if (start < 1) {
        start = 1;
        end = siblingCount;
      }
      // 현재 페이지가 끝 부분에 가까울 때
      if (end > count) {
        start = count - siblingCount + 1;
        end = count;
      }
      // showLeftEllipsis가 true일 때 시작 페이지 앞에 생략 기호 추가
      if (showLeftEllipsis) {
        start++;
      }
      // showRightEllipsis가 true일 때 끝 페이지 뒤에 생략 기호 추가
      if (showRightEllipsis) {
        end--;
      }
      return Array.from({ length: end - start + 1 }, (_, i) => start + i);
    }
  };

  const renderPaginationItems = () => {
    const pageNumbers = getPageNumbers();
    return pageNumbers.map((pageNumber) => (
      <PaginationItem key={pageNumber}>
        <Button
          variant={page + 1 === pageNumber ? 'outline' : 'ghost'}
          onClick={() => setPage(pageNumber - 1)}
        >
          {pageNumber}
        </Button>
      </PaginationItem>
    ));
  };

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <Button
            variant={'ghost'}
            onClick={() => setPage(page - 1)}
            disabled={page === 0}
          >
            <ChevronLeft />
          </Button>
        </PaginationItem>

        {showLeftEllipsis && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}
        {renderPaginationItems()}
        {showRightEllipsis && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}
        <PaginationItem>
          <Button
            variant={'ghost'}
            onClick={() => page < count && setPage(page + 1)}
            disabled={page + 1 === count}
          >
            <ChevronRight />
          </Button>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationComponent;
