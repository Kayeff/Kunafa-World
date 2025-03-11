import { useEffect, useRef, useState } from "react";
import { RiPauseFill, RiPlayFill } from "@remixicon/react";

export default function Video({ src }) {
  const [playVideo, setPlayVideo] = useState(false);
  const videoRef = useRef(null);

  function toggleVideo() {
    setPlayVideo((prev) => !prev);
  }

  useEffect(() => {
    if (videoRef.current) {
      if (playVideo) {
        videoRef.current
          .play()
          .catch((error) => console.error("Error playing video:", error));
      } else {
        videoRef.current.pause();
      }
    }
  }, [playVideo]);

  return (
    <div className="w-full h-full relative">
      <button
        className="h-20 w-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center text-old-lace cursor-pointer border border-old-lace/20 rounded-full z-10 hover:bg-old-lace/5"
        onClick={toggleVideo}
      >
        {playVideo ? <RiPauseFill size={30} /> : <RiPlayFill size={30} />}
      </button>
      <video
        ref={videoRef}
        className="w-full h-full"
        src={src}
        onEnded={() => setPlayVideo(false)}
      />
    </div>
  );
}
