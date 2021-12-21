import React, { useEffect, useState } from 'react'

import SimpleModal from 'components/ui/Modals/SimpleModal'
import { RoundButton } from 'components/ui/Buttons'
import { AnimatedButton } from 'components/ui/Buttons'

const Appointment = () => {
  const [modal, setmodal] = useState(false)
  return (
    <div>
      <div> ---------------- This is appointments page -----------------</div>

      <RoundButton handleClick={() => setmodal(true)}>Make an appointment</RoundButton>
      <h6>Open form emodal to make appointment</h6>

      <h4>Appointments on calendar -- op idea .....</h4>
      <h5>Past appointments</h5>
      <li>Appointment 1</li>
      <li>Appointment 2</li>
      <li>Appointment 1</li>
      <li>Appointment 4</li>
      <h6>Click on appointment for appointments details</h6>

      <SimpleModal isActive={modal} closeModal={() => setmodal(false)} title="Make a new appointment">
        <MakeAppointment isActive={modal} handleClose={() => setmodal(false)} />
      </SimpleModal>
    </div>
  )
}

export default Appointment

const MakeAppointment = ({ isActive, handleClose }) => {
  const [formData, setFormdata] = useState({ date: '', desc: '', doctor: '' })
  const [status, setStatus] = useState('idle')

  useEffect(() => setStatus('idle'), [isActive])

  const handleChange = (e) => {
    setFormdata({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    setStatus('loading')
    e.preventDefault()
    setTimeout(() => setStatus('success'), 2000)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Select a department
        <input type="text" name="desc" value={formData.desc} onChange={handleChange} />
      </label>
      <br />

      <label>Select a doctor</label>
      <input type="text" name="desc" value={formData.desc} onChange={handleChange} />
      <br />

      <label>Enter date and time</label>
      <input type="datetime-local" name="date" value={formData.date} onChange={handleChange} />
      <br />

      <label>Describe your illness</label>
      <input type="text" name="desc" value={formData.desc} onChange={handleChange} />
      <br />

      <AnimatedButton type="submit" round status={status}>
        Submit for approval
      </AnimatedButton>
      <RoundButton variant="danger" type="button" handleClick={handleClose}>
        Cancel
      </RoundButton>
    </form>
  )
}
