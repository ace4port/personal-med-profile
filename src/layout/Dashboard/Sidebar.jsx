import Footer from 'layout/Footer'
import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { privateRoutes } from 'routes/privateRoutes'

const Sidebar = () => {
  return (
    <>
      <div className="dashboard">
        <aside className="dashboard__aside">
          {privateRoutes.map((route) => (
            <div>
              <NavLink key={route.name} to={route.path}>
                {route.name}
              </NavLink>
            </div>
          ))}
        </aside>
        <main className="dashboard__main">
          <Outlet />
        </main>
      </div>
      <Footer />
    </>
  )
}

export default Sidebar
