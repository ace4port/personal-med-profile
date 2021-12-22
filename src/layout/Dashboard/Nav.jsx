import React from 'react'
import { Link, NavLink } from 'react-router-dom'

import Avatar from 'components/ui/Avatar'
import { useDispatch } from 'react-redux'
import { logOut } from 'features/auth/authSlice'

const Nav = () => {
  const dispatch = useDispatch()
  return (
    <nav className="nav">
      <div className="nav__logo">
        <Link to="/dashboard">Personal Medico</Link>
      </div>

      <div className="nav__links">
        <NavLink to="/account">Account</NavLink>
        <NavLink to="/logIn" onClick={() => dispatch(logOut())}>
          Log out
        </NavLink>
        {/* Account details edit here ... */}
        <Avatar size="small" />
      </div>
    </nav>
  )
}
export default Nav
