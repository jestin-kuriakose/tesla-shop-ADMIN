import { Visibility } from '@mui/icons-material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./WidgetSm.scss"
import { userRows } from '../../dummyData'

const WidgetSm = () => {
    const [users, setUsers] = useState<any[]>([])

    useEffect(()=> {
      const getUsers = async () => {
        try{
            setUsers(userRows)
        //   const res = await axios.get("users/?new=true");
        //   setUsers(res.data)
        } catch {}
      }
      getUsers()
    }, [])

  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
      {users.map((user)=>(

      
        <li className="widgetSmListItem" key={user._id}>
          <img
            src={user.img || "https://i.ibb.co/kq0JQ8H/1152px-Line-style-icons-profile-male-svg.png"}
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">{user.username}</span>
            
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        
        ))}
      </ul>
    </div>

  )
}

export default WidgetSm