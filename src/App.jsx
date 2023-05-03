import { useEffect, useState } from "react";
import "./App.css";
import VideoPlayer from "./components/VideoPlayer";
import VideoFile from "./assets/1-min-video.mp4";

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [time, setTime] = useState("");
  const [duration, setDuration] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);
  const [errorMsg, setErrorMsg] = useState("")

  const onPlayVideo = () => {
    setIsPlaying(true);
    setTime("");
    setDuration(time);
  };

  useEffect(() => {
    console.log("Time")
    if(time > 15) {
      setIsDisabled(true)
      setErrorMsg("Cannot more than 15")
    } else {
      setErrorMsg("")
      setIsDisabled(false);
    }
  }, [time])

  useEffect(() => {
    console.log("Duration")
    const timerId = setTimeout(() => {
      setIsPlaying(false);
    }, duration * 1000);
    return () => {
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
      <button disabled={isDisabled} onClick={onPlayVideo}>{isPlaying ? "Pause" : "Play"}</button>
      {errorMsg && <div style={{color: "red"}}>{errorMsg}</div>}
      <VideoPlayer isPlaying={isPlaying} src={VideoFile} />
    </>
  );
}

export default App;
