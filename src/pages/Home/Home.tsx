import React, { useEffect, useMemo, useState } from 'react'
import Layout from '../../components/Layout/Layout'
import TopBar from '../../components/TopBar/TopBar'
import Sidebar from '../../components/Sidebar/Sidebar'
import FeaturedInfo from '../../components/FeaturedInfo/FeaturedInfo'
import Chart from '../../components/Chart/Chart'
import WidgetSm from '../../components/WidgetSm/WidgetSm'
import WidgetLg from '../../components/WidgetLg/WidgetLg'
import "./Home.scss"
import { userData } from '../../dummyData'
import axios from 'axios'

const Home = () => {
  const [userStats, setUserStats] = useState<any[]>([])

  const MONTHS = useMemo(()=>
  ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],[])

  useEffect(()=> {
    const getStats = async() => {
      try {
        setUserStats(userData)
        // const res = await axios.get("/users/stats")
        
        // res.data.map((item: any)=>
        //   setUserStats((prev)=> [
        //     ...prev,
        //     {name: MONTHS[item._id - 1], "Active User": item.total},
        //   ])
        // )
      } catch{}
    }
    getStats()
  }, [MONTHS])

  return (
    <div className="home">
      <TopBar />
      <div className="container">
        <Sidebar />
        <div className="cont">
          <div>
            <FeaturedInfo />
            <Chart data={userStats} title="User Analytics" grid dataKey="Active User"/>
          </div>

          <div className="homeWidgets">
            <WidgetSm/>
            <WidgetLg/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home