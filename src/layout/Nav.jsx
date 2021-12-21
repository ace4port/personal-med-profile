import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { publicRoutes } from 'routes/pubRoutes'

const Nav = () => (
  <nav className="nav">
    <div className="nav__logo">
      <Link to="/">Personal Medico</Link>
    </div>

    <div className="nav__links">
      <NavLink to="/">Home</NavLink>
      {publicRoutes.map((route) => (
        <NavLink key={route.name} to={route.path}>
          {route.name}
        </NavLink>
      ))}
    </div>
  </nav>
)

export default Nav
