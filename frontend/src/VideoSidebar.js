import React , {useState} from 'react'
import "./VideoSidebar.css";
import FavoriteIcon from '@mui/icons-material/Favorite';
import MessageIcon from '@mui/icons-material/Message';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function VideoSidebar({ likes , shares, messages}) {
  const [liked, setLiked] = useState(false);

  const luke = parseInt(likes ,10);

  return (
    
    <div className='videoSidebar'>

    <div className='videoSidebar_button'>
      {liked ? (<FavoriteIcon 
                 className='videoSidebar_icons' 
                 fontSize="large" 
                 onClick = {(e) => setLiked(false)} />
      ) : (
        <FavoriteBorderIcon 
        fontSize="large"
        onClick = {(e) => setLiked(true)} />
      )}
      
      <p>{liked ? luke+1 : luke} </p>
    </div>

    <div className='videoSidebar_button'>

       <MessageIcon className='videoSidebar_icons' fontSize="large" />
       <p>{messages}</p>
    
    </div>


    <div className='videoSidebar_button'>

      <ShareIcon className='videoSidebar_icons' fontSize="large" />
      <p>{shares}</p>
    </div>




    </div>
  )
}

export default VideoSidebar;