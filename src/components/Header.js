import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import VideoCallIcon from '@material-ui/icons/VideoCall'
import AppsIcon from '@material-ui/icons/Apps'
import NotificationIcon from '@material-ui/icons/Notifications'
import Avatar from '@material-ui/core/Avatar'
import {Link} from 'react-router-dom'
import React from 'react'
import {useState} from 'react'
import './Header.css'


function Header() {
    const [search,setsearch] = useState('')
    return (
        <div className="header">
            <div className="header__left">
                <MenuIcon />
                <Link  to="/">
                    <img className="header__logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY9Y4p9eDSg1Zu8VREncY5JHV93Du97yRG2u8TZDgHeCJBbEdQ-ynRpgB6bJl7ciCre_8&usqp=CAU" alt="logo"></img>
                </Link>
               
            </div>
           <div className="header__input">
                <input onChange={e=> setsearch(e.target.value)} type="text" placeholder="Search" />
               <Link className="header__link" to={`/search/${search}`}>
                    <SearchIcon className="header__inputButton" />
               </Link>
                
           </div>
           <div className="header__icons">
                <VideoCallIcon className="header__icon" />
                <AppsIcon className="header__icon" />
                <NotificationIcon className="header__icon" />
                <Avatar
                    alt="prf"
                    src="https://yt3.ggpht.com/yti/APfAmoEuuBbVHhc9x9YfPxUmfGMFejVNh5gLBDlYdQ=s48-c-k-c0x00ffffff-no-rj"
                />
           </div>
            
            
        </div>
    )
}

export default Header;
