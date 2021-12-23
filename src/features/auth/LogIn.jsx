import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import styled from 'styled-components'

import { AnimatedButton } from 'components/ui/Buttons'
import { fireToast } from 'components/ui/Toast'
import { logIn } from './authSlice'

export const Input = styled.input`
  border: none;
  margin: 1rem 0;
  border-bottom: 1px solid #ccc;
  // border-top: 1px solid #ccc;
`

const LogIn = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()

  const status = useSelector((state) => state.auth.status)

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)

  // useEffect(() => dispatch(logInLocal()), [dispatch])

  if (isLoggedIn) {
    fireToast('success', 'Logged in successfully')
    setTimeout(() => navigate(from, { replace: true }), 1000)
  }

  const [email, setEmail] = React.useState('user@example.com')
  const [password, setPassword] = React.useState('string123')

  let from = location.state?.from?.pathname || '/dashboard'

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(logIn({ email, password }))
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
            <Link to="/doctor/login"> here</Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default LogIn
