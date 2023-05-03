import { useEffect, useRef } from "react";

export function VideoPlayer({ src, isPlaying }) {
  const ref = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  }, [isPlaying]);

  return (
    <div>
      <video ref={ref} src={src} loop playsInline muted />;
    </div>
  );
}

export default VideoPlayer;
