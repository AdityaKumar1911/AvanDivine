import React, { useRef, useState } from "react";
import "./VideoPlayer.css";

const VideoPlayer = ({ videoSrc }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    const video = videoRef.current;
    if (video.paused || video.ended) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="video-container mt-5">
      <video
        ref={videoRef}
        className="home-video"
        autoPlay
        loop
        muted
        src={videoSrc}
      >
        Your browser does not support the video tag.
      </video>
      <button className="big-play-button" onClick={togglePlay}>
        {isPlaying ? (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80">
            <path d="M40 0a40 40 0 1040 40A40 40 0 0040 0zM26 61.56V18.44L64 40z" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80">
            <path d="M40 0a40 40 0 1040 40A40 40 0 0040 0zM26 18.44h8v42.12h-8zM46 18.44h8v42.12h-8z" />
          </svg>
        )}
      </button>
    </div>
  );
};

export default VideoPlayer;
