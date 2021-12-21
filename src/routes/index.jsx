import React, { Suspense } from 'react'
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'

import Layout from 'layout'
import Home from 'pages/Home'
import DashboardLayout from 'layout/Dashboard/Layout'
import { publicRoutes } from './pubRoutes'
import { privateRoutes } from './privateRoutes'
import Dashboard from 'pages/Dashboard'

const RoutesList = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {publicRoutes.map((route) => {
            const suspenseWrap = <Suspense fallback={<div>Loading ....</div>}>{route.component}</Suspense>
            return <Route key={route.name} path={route.path} element={suspenseWrap} />
          })}
        </Route>

        <Route
          path={'/dashboard'}
          element={
            <PrivateRoute>
              <DashboardLayout />
            </PrivateRoute>
          }
        >
          <Route index element={<Dashboard />} />
          {privateRoutes.map((route) => (
            <Route key={route.name} path={route.path} element={route.component} />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesList

const PrivateRoute = ({ children }) => {
  const location = useLocation()
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
  if (!isLoggedIn) {
    return <Navigate to="/login" state={{ from: location }} />
  }
  return children
}
