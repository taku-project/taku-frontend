import { useState } from 'react';

import {
  Bell,
  Bookmark,
  LogOut,
  Menu,
  MessageCircle,
  Settings,
  User,
} from 'lucide-react';
import { NavLink } from 'react-router-dom';

import LogoIcon from '@/assets/logo_icon.png';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const navLists = [
  { title: '커뮤니티', path: '/community' },
  { title: '쇼츠', path: '/shorts' },
  { title: '덕후장터', path: '/market' },
  { title: '공지사항', path: '/' },
];

export default function Header() {
  const [isLogin, setIsLogin] = useState(false);

  const handleLogin = () => {
    setIsLogin((prev) => !prev);
  };

  return (
    // 가운데 정렬을 위해 container 클래스 추가
    <header className="flex w-full items-center justify-center border-b">
      {/* md보다 클때 좌우 패딩 80px */}
      <div className="container flex h-12 items-center justify-between px-5 md:h-20 md:px-20">
        <NavLink to="/" className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage src={LogoIcon} alt="Duckwho" />
              <AvatarFallback>DW</AvatarFallback>
            </Avatar>
            <span className="font-semibold">Duckwho</span>
          </div>
        </NavLink>

        <nav className="hidden items-center gap-12 md:flex">
          {navLists.map((nav) => (
            <NavLink
              key={nav.title}
              to={nav.path}
              className={({ isActive }) =>
                `${isActive ? 'font-bold text-[#FDB813]' : 'text-sm font-bold'} hover:text-[#FDB813]`
              }
            >
              {nav.title}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="hidden rounded-full md:inline-flex"
          >
            <MessageCircle className="h-10 w-10" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="hidden rounded-full md:inline-flex"
          >
            <Bookmark className="h-10 w-10" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="hidden rounded-full md:inline-flex"
          >
            <Bell className="h-10 w-10" />
          </Button>
          <div className="hidden md:inline-flex">
            {isLogin ? (
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Avatar>
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>홍길동</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <User className="mr-2 h-6 w-6" />
                    <span>마이페이지</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings className="mr-2 h-6 w-6" />
                    <span>설정</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogin}>
                    <LogOut className="mr-2 h-6 w-6" />
                    <span>로그아웃</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button
                className="bg-[#FDB813] text-black hover:bg-[#FDB813]/90"
                onClick={handleLogin}
              >
                로그인
              </Button>
            )}
          </div>
        </div>
        <Button variant="ghost" size="icon" className="rounded-full md:hidden">
          <Menu className="h-10 w-10" />
        </Button>
      </div>
    </header>
  );
}
