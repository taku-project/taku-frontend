import { Link, Outlet } from 'react-router-dom';

const MarketPage = () => {
  return (
    <div>
      {/* 탭 네비게이션 UI */}
      <nav className="flex flex-col">
        <Link to="/market">상품 조회/검색</Link>
        <Link to="/market/price">시세조회</Link>
        <Link to="/market/ranking">인기순위</Link>
      </nav>

      {/* 하위 라우트의 컴포넌트 렌더링 */}
      <Outlet />
    </div>
  );
};

export default MarketPage;
