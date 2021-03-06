import { AnimatedButton } from 'components/ui/Buttons'
import { fireToast } from 'components/ui/Toast'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { register } from './authSlice'
import { Input } from './LogIn'

const Register = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const status = useSelector((state) => state.auth.status)
  const [formdata, setFormdata] = useState({
    full_name: '',
    email: '',
    password: '',
    contact_no: '',
    gender: '',
    date_of_birth: '',
    blood_group: '',
  })

  const handleChange = (e) => setFormdata({ ...formdata, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(register(formdata))
  }

  if (status === 'success') {
    fireToast('success', 'Account created succss')
    setTimeout(() => navigate('/login', { replace: true }), 2000)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <div>
            <label>First Name:</label>
            <Input type="text" name="full_name" value={formdata.full_name} onChange={handleChange} />
          </div>
          <div>
            <label>Email:</label>
            <Input type="email" name="email" value={formdata.email} onChange={handleChange} />
          </div>
          <div>
            <label>Password:</label>
            <Input type="password" name="password" value={formdata.password} onChange={handleChange} />
          </div>
          <div>
            <label>Contact Number:</label>
            <Input type="text" name="contact_no" value={formdata.contact_no} onChange={handleChange} />
          </div>
          <div>
            <label>Gender:</label>
            <Input type="text" name="gender" value={formdata.gender} onChange={handleChange} />
          </div>
          <div>
            <label>Date of Birth:</label>
            <Input type="date" name="date_of_birth" value={formdata.date_of_birth} onChange={handleChange} />
          </div>
          <div>
            <label>Blood Group:</label>
            <Input type="text" name="blood_group" value={formdata.blood_group} onChange={handleChange} />
          </div>
        </fieldset>

        <AnimatedButton status={status} type="submit">
          Log In
        </AnimatedButton>
        <p>
          Doctor Instead? Register
          <Link to="/doctor/register"> here</Link>
        </p>
      </form>
    </div>
  )
}

export default Register
