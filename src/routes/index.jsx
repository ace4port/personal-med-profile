import React, { Suspense } from 'react'
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'

import Layout from 'layout'
import Home from 'pages/Home'
import DashboardLayout from 'layout/Dashboard/Layout'
import { publicRoutes } from './pubRoutes'
import { privateRoutes } from './privateRoutes'
import Dashboard from 'pages/Dashboard'
import Error from 'pages/Error'
import { doctorRoutes } from './doctorRoutes'

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
          {privateRoutes.map((route) => {
            const suspenseWrap = <Suspense fallback={<div>Loading ....</div>}>{route.component}</Suspense>
            return <Route key={route.name} path={route.path} element={suspenseWrap} />
          })}
        </Route>
        <Route
          path={'/doctor/dashboard'}
          element={
            <DoctorRoute>
              <DashboardLayout />
            </DoctorRoute>
          }
        >
          <Route index element={<Dashboard />} />
          {doctorRoutes.map((route) => {
            const suspenseWrap = <Suspense fallback={<div>Loading ....</div>}>{route.component}</Suspense>
            return <Route key={route.name} path={route.path} element={suspenseWrap} />
          })}
        </Route>
        <Route path="*" element={<Error />} />
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

const DoctorRoute = ({ children }) => {
  const location = useLocation()
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
  const isDoctor = useSelector((state) => state.auth.isDoctor)
  if (!isLoggedIn) {
    return <Navigate to="/login" state={{ from: location }} />
  }
  if (!isDoctor) {
    return <Navigate to="/login" />
  }
  return children
}
