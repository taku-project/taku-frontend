import FallbackPage from '@/pages/FallbackPage';
import MainPage from '@/pages/MainPage';
import LoginPage from '@/pages/auth/LoginPage';
import SignupPage from '@/pages/auth/SignUpPage';
import CommunityCategoryPage from '@/pages/community/CommunityCategoryPage';
import CommunityDetailPage from '@/pages/community/CommunityDetailPage';
import CommunityPage from '@/pages/community/CommunityPage';
import CreateCommunityPage from '@/pages/community/CreateCommunityPage';
import UpdateCommunityPage from '@/pages/community/UpdateCommunityPage';
import CreateMarketPage from '@/pages/market/CreateMarketPage';
import MarketDetailPage from '@/pages/market/MarketDetailPage';
import MarketPage from '@/pages/market/MarketPage';
import UpdateMarketPage from '@/pages/market/UpdateMarketPage';
import MyPage from '@/pages/mypage/MyPage';
import CreateShortsPage from '@/pages/shorts/CreateShortsPage';
import ShortsPage from '@/pages/shorts/ShortsPage';

type RouteType = {
  path: string;
  element: React.ReactElement;
};

export const routes: RouteType[] = [
  { path: '/', element: <MainPage /> },
  { path: '/auth/login', element: <LoginPage /> },
  { path: '/auth/signup', element: <SignupPage /> },
  { path: '/community', element: <CommunityPage /> },
  { path: '/community/:category', element: <CommunityCategoryPage /> },
  { path: '/community/:category/:id', element: <CommunityDetailPage /> },
  { path: '/community/:category/add', element: <CreateCommunityPage /> },
  { path: '/community/:category/:id/edit', element: <UpdateCommunityPage /> },
  { path: '/market', element: <MarketPage /> },
  { path: '/market/add', element: <CreateMarketPage /> },
  { path: '/market/:id', element: <MarketDetailPage /> },
  { path: '/market/:id/edit', element: <UpdateMarketPage /> },
  { path: '/shorts', element: <ShortsPage /> },
  { path: '/shorts/add', element: <CreateShortsPage /> },
  { path: '/mypage', element: <MyPage /> },
  { path: '*', element: <FallbackPage /> },
];
