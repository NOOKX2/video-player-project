import { useState } from "react";
import "./App.css";
import VideoPlayer from "./components/VideoPlayer";
import VideoFile from "./assets/1-min-video.mp4"

function App() {
  const [isPlaying, setIsPlaying] = useState();
  const [time, setTime] = useState("");

  return (
    <>
      <input
        type="number"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />
      <button onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? "Pause" : "Play"}
      </button>
      <VideoPlayer
        isPlaying={isPlaying}
        src={VideoFile}
      />
    </>
  );
}

export default App;
