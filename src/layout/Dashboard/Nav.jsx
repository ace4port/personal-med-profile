import React from 'react'
import { Link, NavLink } from 'react-router-dom'

import Avatar from 'components/ui/Avatar'

const Nav = () => (
  <nav className="nav">
    <div className="nav__logo">
      <Link to="/dashboard">Personal Medico</Link>
    </div>

    <div className="nav__links">
      <NavLink to="/account">Account</NavLink>
      <NavLink to="/logIn">Log out</NavLink>
      {/* Account details edit here ... */}
      <Avatar size="small" />
    </div>
  </nav>
)

export default Nav
