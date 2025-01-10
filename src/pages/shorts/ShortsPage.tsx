import { useState } from 'react';

import { MessageSquareText, ThumbsDown, ThumbsUp } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';

const ShortsPage = () => {
  const [openComments, setOpenComments] = useState(true);

  return (
    <div className="h-[calc(100vh-200px)] bg-stone-900">
      <div className="relative flex w-full justify-between p-4">
        <section className="absolute inset-x-0 flex w-[400px] items-end bg-red-300">
          {/* video div */}
          <div>
            <video
              className="h-[800px] w-full"
              src="https://www.w3schools.com/html/mov
ies.mp4"
              controls
            ></video>
          </div>
          {/* button layout */}
          <div className="flex flex-col items-center justify-center gap-2">
            <div>
              <Button size="icon">
                <ThumbsUp />
              </Button>
              <p>123</p>
            </div>
            <div>
              <Button size="icon">
                <ThumbsDown />
              </Button>
            </div>
            <div>
              <Button size="icon">
                <MessageSquareText />
              </Button>
              <p>122</p>
            </div>
          </div>
        </section>
        <aside className="absolute right-4 h-full w-1/4">
          <Card>
            <CardHeader></CardHeader>
            <CardContent></CardContent>
            <CardFooter className="flex justify-between"></CardFooter>
          </Card>
        </aside>
      </div>
    </div>
  );
};

export default ShortsPage;
