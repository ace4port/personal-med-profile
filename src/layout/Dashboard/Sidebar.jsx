import React from 'react'
import styled from 'styled-components'

import Avatar from 'components/ui/Avatar'
import { PlainButton } from 'components/ui/Buttons'
import Footer from 'layout/Footer'
import { NavLink, Outlet } from 'react-router-dom'
import { privateRoutes } from 'routes/privateRoutes'
import Nav from './Nav'

const Link = styled(NavLink)`
  display: block;
  svg {
    margin-right: 0.5rem;
    vertical-align: 'middle';
  }
  gap: 0.5rem;
  padding: 1rem;
  cursor: pointer;
  &:hover {
    background-color: #f0f0a0;
  }
  &.active {
    background-color: #f0f0f0;
  }
`

const Sidebar = ({ data, loading, error }) => {
  const name = data?.first_name ?? 'EMT'
  return (
    <>
      <div className="dashboard">
        <aside className="dashboard__aside">
          <div>
            <UserInfoCard name={name} loading={loading} />
            {privateRoutes.map((route) => (
              <Link key={route.name} to={route.path}>
                {route.icon && route.icon}
                {route.name}
              </Link>
            ))}
          </div>
        </aside>
        <div className="dashboard__body">
          <Nav />
          <main className="main">
            {loading && <div>Loading...</div>}
            {error && (
              <div>
                An error occured ... <p>{error.message + error.details && error.details}</p>
              </div>
            )}
            <Outlet />
          </main>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Sidebar

const LinksContainer = styled.div`
  display: flex;
  justify-content: space-around;
`
const UserInfo = styled.div`
  margin: 0px;
  padding-bottom: 10px;
  .user-info-card__thumb {
    display: flex;
    justify-content: center;
  }
  h3,
  p {
    margin: 0px;
  }
  button {
    font-size: 1rem;
  }
`
const UserInfoCard = ({ thumb, name, id, loading }) => {
  //  redirect user to profile page
  const handleRedirect = () => {}
  return (
    <UserInfo className="card user-info-card" onClick={handleRedirect}>
      <div className="user-info-card__thumb">
        <Avatar src={thumb} />
      </div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="user-info-card__info">
          <h3>{name}</h3>
          <p>How are you feeling today?</p>
          <LinksContainer>
            <PlainButton>Fine</PlainButton> <PlainButton>Good</PlainButton> <PlainButton>Ill</PlainButton>
          </LinksContainer>
        </div>
      )}
    </UserInfo>
  )
}
