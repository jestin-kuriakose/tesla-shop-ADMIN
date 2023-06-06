import React from 'react'
import './TopBar.scss'
import { Language, NotificationsNone, Settings } from '@mui/icons-material'
import "./TopBar.scss"

const TopBar = () => {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <img width="140px" className="logo" src="https://teslaelectronics.ca/wp-content/uploads/2022/01/Logo-B-PNG-Transparent.png"></img>
        </div>
        <div className="topRight">
          <button>Logout</button>
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  )
}

export default TopBar