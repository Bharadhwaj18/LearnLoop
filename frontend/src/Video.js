import React, { useRef, useState } from "react";
import "./video.css";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";

function Video({
  url,
  likes,
  shares,
  messages,
  heading,
  description,
  songName,
}) {
  const [playing, setPlaying] = useState(true);

  const videoRef = useRef(null);

  const handleVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div className="video">
      <video
        onClick={handleVideoPress}
        className="video_player"
        src={url}
        loop
        ref={videoRef}
      ></video>

      <VideoFooter
        heading={heading}
        description={description}
        songName={songName}
      />

      <VideoSidebar likes={likes} shares={shares} messages={messages} />
    </div>
  );
}

export default Video;
