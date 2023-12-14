import React , {useRef, useState} from 'react'
import './video.css';
import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar';
// import ReactPlayer from 'react-player/youtube'



function Video({ url , likes, shares, messages, heading, description, songName }) {

    const [playing,setPlaying] = useState(true);

    const videoRef = useRef(null)

    const handleVideoPress = () => {
        if(playing)
        {
          videoRef.current.pause();
          setPlaying(false);
        }
        else {
          videoRef.current.play();
          setPlaying(true);
        }
    
      }


  return (
    <div className='video'>
    <video 
    onClick={handleVideoPress}
    className='video_player'
    src = {url}
    loop
    ref = {videoRef}
    ></video>
    {/* <ReactPlayer url='https://www.youtube.com/watch?v=IpYJjVw6wjU&ab_channel=fotios' /> */}

    {/* <iframe onClick={handleVideoPress} width="600" height="800" src="https://www.youtube.com/embed/815NUDirMGY" title="Sour Cream &amp; Onion Chips" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}

    <VideoFooter 
    heading = {heading}
    description={description}
    songName = {songName}
    />

    <VideoSidebar 
         likes = {likes}
        shares = {shares}
        messages = {messages}
    />
    
    </div>
  )
}

export default Video