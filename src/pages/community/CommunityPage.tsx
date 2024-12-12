import { Outlet } from 'react-router-dom';

const CommunityPage = () => {
  return (
    <>
      <div>커뮤니티 메인 페이지</div>
      <Outlet />
    </>
  );
};

export default CommunityPage;
