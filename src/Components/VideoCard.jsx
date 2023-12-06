import { Avatar } from '@mui/material'
import React from 'react'
import '../Styles/videocard.css'

const VideoCard = ({image , title, channel, views, timestamp, channelImage}) => {
  return (
    <div className='videoCard'>
      <img className='image' src={image} alt="" />
      <div className="video-info">
        <Avatar className='video-avatar' alt={channel} src={channelImage}/>
        <div className="video-text">
            <h4>{title}</h4>
            <p>{channel}</p>
            <p>{views} . {timestamp}</p>
        </div>
      </div>
    </div>
  )
}

export default VideoCard
