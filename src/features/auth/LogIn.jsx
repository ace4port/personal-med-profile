import { RoundButton } from 'components/ui/Buttons'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { logIn } from './authSlice'

const LogIn = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()

  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  let from = location.state?.from?.pathname || '/dashboard'

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(logIn({ email, password }))
    navigate(from, { replace: true })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>
            E-mail: <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
        </fieldset>
        <fieldset>
          <label>
            Password: <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
        </fieldset>
        <RoundButton type="submit">Submit</RoundButton>
      </form>
    </div>
  )
}

export default LogIn
