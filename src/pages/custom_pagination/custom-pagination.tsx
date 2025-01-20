import { ChevronLeft, ChevronRight } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
} from '@/components/ui/pagination';

type PaginationComponentProps = {
  count: number;
  siblingCount?: number;
  page: number;
  setPage: (page: number) => void;
};

const PaginationComponent = ({
  count,
  siblingCount = 5,
  page,
  setPage,
}: PaginationComponentProps) => {
  const totalPages = Math.ceil(count / siblingCount);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  const renderPaginationItems = () => {
    const items = [];
    for (let i = 1; i <= totalPages; i++) {
      items.push(
        <PaginationItem key={i} onClick={() => handlePageChange(i)}>
          <Button variant={i === page ? 'outline' : 'ghost'} size="icon">
            {i}
          </Button>
        </PaginationItem>,
      );
    }
    return items;
  };

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <Button
            onClick={() => handlePageChange(page - 1)}
            disabled={page === 1}
          >
            <ChevronLeft />
          </Button>
        </PaginationItem>
        {renderPaginationItems()}
        <PaginationItem>
          <Button
            onClick={() => handlePageChange(page + 1)}
            disabled={page === totalPages}
          >
            <ChevronRight />
          </Button>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationComponent;
