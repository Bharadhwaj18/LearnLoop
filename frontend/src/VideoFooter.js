import React from 'react'
import "./VideoFooter.css";
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
// import Ticker from "react-ticker";

function VideoFooter({ heading, description, songName}) {
  return (
    <div className='videoFooter'>
        <div className='videoFooter_text'>
            <h3>@{heading}</h3>
            <p>{description}</p>
            <div className='videoFooter_ticker'>
             <AudiotrackIcon
             className='videoFooter_icon' />

             <p>{songName}</p>

             {/* <Ticker mode="smooth">
              {({ index }) => (
                <>
                  
                </>
              )}
             </Ticker>             */}
             </div>
        </div>
    </div>
  )
}

export default VideoFooter;