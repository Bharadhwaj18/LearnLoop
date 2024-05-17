import Video from "./Video";
import "./App.css";
import axios from "./axios";
import React, { useState, useEffect } from "react";
import UploadWidget from "./UploadWidget";

function App({ url, likes, shares, messages, heading, description, songName }) {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await axios.get("/v2/posts/");
      setVideos(response.data);

      return response;
    }

    fetchPosts();
  }, []);

  // console.log(videos);

  return (
    <div className="app">
      <UploadWidget />
      <div className="app_videos">
        {videos.map(
          ({
            url,
            likes,
            shares,
            messages,
            heading,
            description,
            songName,
          }) => (
            <Video
              url={url}
              heading={heading}
              songName={songName}
              likes={likes}
              messages={messages}
              description={description}
              shares={shares}
            />
          )
        )}
      </div>
    </div>
  );
}

export default App;
