import React from 'react'
import './SearchPage.css'
import ChannelRow from "./ChannelRow"
import VideoRow from "./VideoRow"
import TuneOutLinedIcon from "@material-ui/icons/TuneOutlined"

function SearchPage() {
    return (
        <div className="searchPage"> 
            <div className="searchPage__filter">
                <TuneOutLinedIcon/>
                <h2> Filter</h2>
            </div>
            <hr/>
            <ChannelRow 
            image="https://yt4.ggpht.com/ytc/AKedOLSHPFIF5RNBN8IaKoI12xwq1R4dgYHxfHr2tr5m=s32-c-k-c0x00ffffff-no-rj"
            channel="just something"
            verified
            subs="660K"
            noOfVideos={382}
            description="You can find awesome things here "
            
            />
            <hr/>
            <VideoRow
            views="1.4M"
            subs="659K"
            description="Do You want to"
            timestamps="59 Seconds ago"
            channel="the Idea"
            title="lets do something"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDwFWX0Io1HOZeg0qDTYjitprnJJ-cssVESQ&usqp=CAU"
            
            />
        </div>
    )
}

export default SearchPage
 