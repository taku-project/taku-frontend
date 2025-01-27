import { MutableRefObject, useEffect, useRef, useState } from 'react';

import Hls from 'hls.js';

type VideoPlayerProps = {
  currentTime: number;
  setCurrentTime: React.Dispatch<React.SetStateAction<number>>;
  src: string;
  type?: 'm3u8' | 'mp4';
};

const VideoPlayer = ({
  currentTime,
  setCurrentTime,
  src,
  type,
}: VideoPlayerProps) => {
  const videoRef: MutableRefObject<HTMLVideoElement | null> = useRef(null);

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleEnded = () => {
    console.log('비디오 끝', currentTime);
  };

  useEffect(() => {
    if (type === 'm3u8' && Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(src);
      videoRef.current && hls.attachMedia(videoRef.current);
    }
  }, [src, type]);

  return type === 'm3u8' ? (
    <video
      className="h-full w-full"
      autoPlay
      onTimeUpdate={handleTimeUpdate}
      onEnded={handleEnded}
      ref={videoRef}
      controls
    />
  ) : (
    <video
      className="h-full w-full"
      autoPlay
      onTimeUpdate={handleTimeUpdate}
      onEnded={handleEnded}
      ref={videoRef}
      src={src}
      controls
    />
  );
};

export default VideoPlayer;
