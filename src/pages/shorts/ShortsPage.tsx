import { useState } from 'react';

import { MessageSquareText, ThumbsDown, ThumbsUp, X } from 'lucide-react';

import Replies from '@/components/comments/Replies';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';

/*
"data": [
    {
      "id": "string",
      "comment": "string",
      "shorts_id": "string",
      "created_at": "2025-01-11T12:28:04.826Z",
      "user_info": {
        "id": 0,
        "nickname": "string",
        "profile_image": "string"
      },
      "replies": [
        {
          "id": "string",
          "reply_text": "string",
          "user_id": 0,
          "created_at": "2025-01-11T12:28:04.826Z"
        }
      ]
    }
  ],
*/
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
    <div className="bg-stone-900">
      <div className={'flex w-full justify-center gap-20 p-4'}>
        <section className="inset-x-0 flex w-[400px] items-end text-white">
          {/* video div */}
          <div className="h-full w-full overflow-hidden rounded-lg">
            <video
              className="h-full w-full"
              src="https://www.w3schools.com/html/mov
ies.mp4"
              controls
            />
          </div>
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
          <aside className="h-full w-[400px]">
            <Card className="h-full border border-[#ffffff20] bg-transparent text-white">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 border-b border-[#ffffff20] px-4 py-1">
                <div className="flex flex-row items-center gap-2">
                  <h2 className="font-bold">댓글</h2>
                  <p className="text-base">100</p>
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
              <CardContent className="h-full min-h-[600px]">
                <ul className="flex flex-col gap-4 py-4">
                  {testComments.map((comment) => (
                    <li key={comment.id} className="flex flex-col gap-2">
                      <div className="flex flex-row items-start gap-2">
                        <Avatar>
                          <AvatarImage
                            src={comment.user_info.profile_image}
                            alt={comment.user_info.nickname}
                          />
                          <AvatarFallback>
                            {comment.user_info.nickname[0]}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col gap-2">
                          <p className="font-bold">
                            {comment.user_info.nickname}
                          </p>
                          <p>{comment.comment}</p>
                          <Replies replies={comment.replies} />
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="flex items-start justify-between gap-2 border-t border-[#ffffff20] p-4">
                <Avatar>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="flex w-full flex-col items-end gap-2 bg-transparent">
                  <Textarea
                    placeholder="댓글 추가..."
                    className="min-h-10 border-stone-700 bg-transparent"
                  />
                  <div className="flex gap-2">
                    <Button variant="ghost" className="h-8 py-1">
                      취소
                    </Button>
                    <Button variant="secondary" className="h-8 py-1">
                      댓글
                    </Button>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </aside>
        )}
      </div>
    </div>
  );
};

export default ShortsPage;
