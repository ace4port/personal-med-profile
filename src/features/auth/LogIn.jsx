import { AnimatedButton } from 'components/ui/Buttons'
import { fireToast } from 'components/ui/Toast'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { logIn } from './authSlice'

const Input = styled.input`
  border: none;
  margin: 1rem 0;
  border-bottom: 1px solid #ccc;
  // border-top: 1px solid #ccc;
`

const LogIn = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()

  const authStatus = useSelector((state) => state.auth.status)
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
  const [status, setStatus] = useState('idle')

  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  let from = location.state?.from?.pathname || '/dashboard'

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus(authStatus)
    setStatus('loading')
    dispatch(logIn({ email, password }))
    setStatus(authStatus)
  }

  if (isLoggedIn) {
    fireToast('success', 'Logged in successfully')
    setTimeout(() => navigate(from, { replace: true }), 2000)
  }

  return (
    <div>
      <div className="card">
        <form onSubmit={handleSubmit}>
          <h2>Patient Log In</h2>
          <div>
            <label>E-mail:</label>
            <Input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>

          <div>
            <label>Password:</label>
            <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <AnimatedButton status={status} type="submit">
            Log In
          </AnimatedButton>
          <p>
            Doctor Instead? Log in
            <Link to="doctor/login"> here</Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default LogIn
