import React from 'react'
import './RecomendedVideos.css'
import Inf from './Inf'
import VideoCard from './VideoCard'

function RecomendedVideos() {
    return (
        <div className="recomendedVideos"> 
            <h2> Recomended</h2>
            <div className="recomendedVideos__card">
                {Inf.map((inf)=>(
                    <div className="recomendedVideo__obj">
                        <VideoCard key={inf.id} image={inf.image} title={inf.title} channel={inf.channel} channelImage={inf.channelImage} views={inf.views} />
                    </div>
                ))}
            </div>
           
           
        </div>
    )
}

export default RecomendedVideos
