import { useState } from 'react';

import { AvatarImage } from '@radix-ui/react-avatar';
import { EllipsisVertical } from 'lucide-react';

import { Avatar, AvatarFallback } from '../ui/avatar';
import { Button } from '../ui/button';
import CommentForm from './CommentForm';
import Replies from './Replies';

type CommentItemProps = {
  comment: any;
};

const CommentItem = ({ comment }: CommentItemProps) => {
  const [openCommentForm, setOpenCommentForm] = useState(false);

  return (
    <li key={comment.id} className="flex flex-col gap-2">
      <div className="flex flex-row items-start gap-2">
        <Avatar>
          <AvatarImage
            src={comment.user_info.profile_image}
            alt={comment.user_info.nickname}
          />
          <AvatarFallback>{comment.user_info.nickname[0]}</AvatarFallback>
        </Avatar>
        <div className="flex w-full flex-col items-start gap-1">
          <div className="flex w-full flex-row items-start justify-between">
            <div>
              <p className="font-bold leading-5">
                {comment.user_info.nickname}
              </p>
              <p className="leading-5">{comment.comment}</p>
            </div>
            <Button
              size="icon"
              variant={'ghost'}
              className="h-8 w-fit px-2 py-0"
            >
              <EllipsisVertical />
            </Button>
          </div>
          <Button
            variant="ghost"
            onClick={() => setOpenCommentForm(!openCommentForm)}
            className="h-8 w-fit px-2 py-0 text-sm"
          >
            답글
          </Button>
          {openCommentForm && <CommentForm isReply />}
          <Replies replies={comment.replies} />
        </div>
      </div>
    </li>
  );
};

export default CommentItem;
