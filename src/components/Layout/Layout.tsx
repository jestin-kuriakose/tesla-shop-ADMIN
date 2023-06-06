import React from 'react'
import "./Layout.scss"
import TopBar from '../TopBar/TopBar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
        <TopBar/>
        <Outlet/>
    </>
  )
}

export default Layout