import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

import { setUser } from 'features/auth/authSlice'
import useFetch from 'hooks/useFetch'
import { fetchUser } from 'api'

const DashboardLayout = () => {
  const user = useSelector((state) => state.auth.user)
  const dispatch = useDispatch()
  const [data, loading, error, success] = useFetch(fetchUser, null, !user)
  success && dispatch(setUser(data))

  return (
    <Sidebar loading={loading} error={error} data={data}>
      <Outlet />
    </Sidebar>
  )
}

export default DashboardLayout
