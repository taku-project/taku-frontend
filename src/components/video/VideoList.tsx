import { useCallback, useEffect, useRef, useState } from 'react';

import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel';

const VideoList = () => {
  const [api, setApi] = useState<any>();
  const carouselRef = useRef<HTMLDivElement>(null);

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

  const scrollPrev = useCallback(() => {
    if (api) {
      api.scrollPrev();
    }
  }, [api]);

  const scrollNext = useCallback(() => {
    if (api) {
      api.scrollNext();
    }
  }, [api]);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (e.deltaY > 0) {
        scrollNext();
      } else {
        scrollPrev();
      }
    };

    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      if (carousel) {
        carousel.removeEventListener('wheel', handleWheel);
      }
    };
  }, [scrollNext, scrollPrev]);

  return (
    <div ref={carouselRef} className="h-full w-full">
      <Carousel
        setApi={setApi}
        opts={{
          align: 'start',
        }}
        orientation="vertical"
        className="w-full"
      >
        <CarouselContent className="flex h-[1000px] flex-col gap-4 rounded-lg">
          {videos.map((videoSrc, index) => (
            <CarouselItem
              key={index}
              className="w-full basis-11/12"
              ref={index === videos.length - 1 ? lastVideoElementRef : null}
            >
              <div className="relative h-full w-full overflow-hidden rounded-lg">
                <video className="h-full w-full" src={videoSrc} controls />
                <p className="absolute bottom-40 left-0 z-10 rounded-br-lg bg-black bg-opacity-50 px-2 py-1 text-xs text-white">
                  {index}
                </p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default VideoList;
