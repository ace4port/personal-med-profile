import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { AnimatedButton } from 'components/ui/Buttons'
import { Input } from 'features/auth/LogIn'
import { fireToast } from 'components/ui/Toast'
import { UpdateAccount } from 'api'

const Account = () => {
  const user = useSelector((state) => state.auth.user)
  const [status, setStatus] = useState('idle')

  const [formdata, setformdata] = useState({
    full_name: user.full_name,
    password: '',
    contact_no: user.contact_no,
    gender: user.gender,
    date_of_birth: user.date_of_birth,
    blood_group: user.blood_group,
  })

  const handleChange = (e) => setformdata({ ...formdata, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      await UpdateAccount(formdata)
      fireToast('success', 'Account updated')
      setStatus('success')
    } catch (error) {
      setStatus('error')
      fireToast('error', error.message)
    }
  }
  const nav = useNavigate()
  if (status === 'success') {
    setTimeout(() => nav('/dashboard'), 2000)
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Change your account settings</legend>
          <div>
            <label>First Name:</label>
            <Input type="text" name="full_name" value={formdata.full_name} onChange={handleChange} />
          </div>
          <div>
            <label>Email:</label>
            <Input type="email" name="email" value={formdata.email} onChange={handleChange} />
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

          <div>
            <label>Password:</label>
            <Input type="password" name="password" value={formdata.password} onChange={handleChange} />
          </div>
        </fieldset>

        <AnimatedButton status={status} type="submit">
          Register
        </AnimatedButton>
      </form>
    </div>
  )
}

export default Account
