import { Avatar } from '@material-ui/core'
import './VideoCard.css'
import React from 'react'

function VideoCard({image , timestamp , title, views, channel, channelImage}) {
    return (
        <div className="videoCard">
            <img className="videoCard__image" src={image} ></img>
            <div className="videoCard__info">
                <Avatar className="videocard__avatar" alt={channel} src={channelImage}/>
                <div className="videoCard__text">
                    <h4>{title}</h4>
                    <p>{channel}</p>
                    <p>
                        {views} . {timestamp}
                    </p>

                </div>
            </div>
          
            
        </div>
    )
}


export default VideoCard
