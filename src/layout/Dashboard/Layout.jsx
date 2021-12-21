import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from './Nav'
import Sidebar from './Sidebar'

const DashboardLayout = () => {
  return (
    <>
      <Nav />
      <Sidebar>
        <Outlet />
      </Sidebar>
    </>
  )
}

export default DashboardLayout
