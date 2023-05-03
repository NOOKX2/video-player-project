import { useEffect, useState } from "react";
import "./App.css";
import VideoPlayer from "./components/VideoPlayer";
import VideoFile from "./assets/1-min-video.mp4";

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [time, setTime] = useState("");
  const [duration, setDuration] = useState(0);

  const onPlayVideo = () => {
    setIsPlaying(true);
    setTime("");
    setDuration(time);
  };

  useEffect(() => {
    console.log("[App.jsx] useEffect");
    const timerId = setTimeout(() => {
      console.log("[App.jsx] setTimeout: ", duration);
      setIsPlaying(false);
    }, duration * 1000);
    return () => {
      console.log("[App.jsx] cleanup function");
      clearTimeout(timerId);
    };
  }, [duration]);

  return (
    <>
      <input
        type="number"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />
      <button onClick={onPlayVideo}>{isPlaying ? "Pause" : "Play"}</button>
      <VideoPlayer isPlaying={isPlaying} src={VideoFile} />
    </>
  );
}

export default App;
