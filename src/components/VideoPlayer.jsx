import { useEffect, useRef } from "react";

export function VideoPlayer({ src, isPlaying }) {
  const ref = useRef(null);

  useEffect(() => {
    console.log("useEffect");
    if (isPlaying) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  }, [isPlaying]);

  console.log("Render");
  return (
    <div>
      <video ref={ref} src={src} loop playsInline muted />;
    </div>
  );
}

export default VideoPlayer;
