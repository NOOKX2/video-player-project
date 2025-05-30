import "./App.css";
import VideoPlayer from "./Components/VideoPlayer";
import { useState } from "react";

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [text, setText] = useState("");

  return (
    <>
      <input type="text" onChange={(e) => setText(e.target.value)}/>
      <button onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? "Pause" : "Play"}
        </button>
        <br />
      <VideoPlayer src='https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4' isPLaying={isPlaying}/>
    </>
  );
}

export default App;
