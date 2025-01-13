import { useRef, useState } from 'react';

import { ScrollArea } from '@/components/ui/scroll-area';

const VideoList = () => {
  const [videos, setVideos] = useState([
    'https://www.w3schools.com/html/movies.mp4',
    'https://www.w3schools.com/html/movies.mp4',
    'https://www.w3schools.com/html/movies.mp4',
  ]);

  const loadMoreVideos = () => {
    // 임의의 비디오 URL 추가 (여기서는 같은 URL 사용)
    setVideos((prevVideos) => [
      ...prevVideos,
      'https://www.w3schools.com/html/movies.mp4',
      'https://www.w3schools.com/html/movies.mp4',
      'https://www.w3schools.com/html/movies.mp4',
    ]);
  };

  const observer: any = useRef();
  const lastVideoElementRef = (node: any) => {
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        loadMoreVideos();
      }
    });
    if (node) observer.current.observe(node);
  };
  return (
    <ScrollArea className="flex max-h-[1000px] w-full flex-col pr-4">
      {videos.map((videoSrc, index) => (
        <div
          key={index}
          className="mb-4 h-fit w-full overflow-hidden rounded-lg"
          ref={index === videos.length - 1 ? lastVideoElementRef : null}
        >
          <video className="h-[960px] w-full" src={videoSrc} controls />
        </div>
      ))}
    </ScrollArea>
  );
};

export default VideoList;
