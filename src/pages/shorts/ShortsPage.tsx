import { useState } from 'react';

import { MessageSquareText, ThumbsDown, ThumbsUp, X } from 'lucide-react';

import CommentForm from '@/components/comments/CommentForm';
import CommentContent from '@/components/comments/CommentList';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import VideoList from '@/components/video/VideoList';

const testComments = [
  {
    id: '1',
    comment: '안녕하세요',
    shorts_id: '1',
    created_at: '2025-01-11T12:28:04.826Z',
    user_info: {
      id: 0,
      nickname: '홍길동',
      profile_image: '',
    },
    replies: [
      {
        id: '1',
        reply_text: '답글1',
        user_id: 0,
        created_at: '2025-01-11T12:28:04.826Z',
      },
      {
        id: '2',
        reply_text: '답글2',
        user_id: 0,
        created_at: '2025-01-11T12:28:04.826Z',
      },
    ],
  },
  {
    id: '2',
    comment: '댓글입니다',
    shorts_id: '1',
    created_at: '2025-01-11T12:28:04.826Z',
    user_info: {
      id: 0,
      nickname: '김삿갓',
      profile_image: '',
    },
    replies: [],
  },
];

const ShortsPage = () => {
  const [openComments, setOpenComments] = useState(true);

  return (
    <div className="h-full bg-stone-900">
      <div className={'flex w-full justify-center gap-20 p-4'}>
        <section className="inset-x-0 flex w-[600px] items-end text-white">
          {/* video layout */}
          <VideoList />
          {/* button layout */}
          <div className="flex flex-col items-center justify-center gap-2 text-center">
            <div>
              <Button size="icon" variant="secondary" className="rounded-full">
                <ThumbsUp />
              </Button>
              <p>123</p>
            </div>
            <div>
              <Button size="icon" variant="secondary" className="rounded-full">
                <ThumbsDown />
              </Button>
            </div>
            <div>
              <Button
                size="icon"
                variant="secondary"
                className="rounded-full"
                onClick={() => setOpenComments((prevValue) => !prevValue)}
              >
                <MessageSquareText />
              </Button>
              <p>122</p>
            </div>
          </div>
        </section>
        {openComments && (
          <aside className="h-full w-[480px]">
            <Card className="h-full border border-[#ffffff20] bg-transparent text-white">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 border-b border-[#ffffff20] px-4 py-1">
                <div className="flex flex-row items-center gap-2">
                  <h2 className="font-bold">댓글</h2>
                  <p className="text-base">{testComments.length}</p>
                </div>
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={() => setOpenComments(false)}
                  className="rounded-full"
                >
                  <X size={64} />
                </Button>
              </CardHeader>
              <CardContent className="h-full min-h-[800px]">
                <CommentContent commentsArr={testComments} />
              </CardContent>
              <CardFooter className="flex items-start justify-between gap-2 border-t border-[#ffffff20] p-4">
                <CommentForm />
              </CardFooter>
            </Card>
          </aside>
        )}
      </div>
    </div>
  );
};

export default ShortsPage;
