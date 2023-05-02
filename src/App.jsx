import { useState } from "react";
import "./App.css";
import VideoPlayer from "./components/VideoPlayer";

function App() {
  const [isPlaying, setIsPlaying] = useState();
  const [time, setTime] = useState("");

  return (
    <>
      <input type="number" value={time} onChange={(e) => setTime(e.target.value)} />
      <button onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? "Pause" : "Play"}
      </button>
      <VideoPlayer isPlaying={isPlaying} src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" />
    </>
  );
}

export default App;
