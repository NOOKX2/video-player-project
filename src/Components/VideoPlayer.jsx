import { useEffect, useRef } from "react"

export function VideoPlayer({src, isPLaying}) {
  const ref = useRef(null)
 

  useEffect(() => {
    if(isPLaying){
        ref.current.play();
    }
    else {
        ref.current.pause();
    }

  }, [isPLaying])

  return (
    <video ref={ref} src={src} loop playsInline muted/>
  )
}
export default VideoPlayer