import React, { useEffect, useState } from 'react'

import FormModal from 'components/ui/Modals/FormModal'
import { RoundButton } from 'components/ui/Buttons'
import { AnimatedButton } from 'components/ui/Buttons'
import { fireToast } from 'components/ui/Toast'

const Appointment = () => {
  const [modal, setmodal] = useState(false)
  return (
    <div>
      <div> ---------------- This is appointments page -----------------</div>

      <RoundButton handleClick={() => setmodal(true)}>Make an appointment</RoundButton>
      <FormModal isActive={modal} closeModal={() => setmodal(false)} title="Make a new appointment">
        <MakeAppointment isActive={modal} handleClose={() => setmodal(false)} />
      </FormModal>

      <h4>Appointments on calendar -- op idea .....</h4>
      <h5>Past appointments</h5>
      <li>Appointment 1</li>
      <li>Appointment 2</li>
      <li>Appointment 1</li>
      <li>Appointment 4</li>
      <h6>Click on appointment for appointments details</h6>
    </div>
  )
}

export default Appointment

const departments = [
  'Anesthesiology',
  'Orthopedic',
  'Dermatology',
  'Pathalogy',
  'Pediatrics',
  'Radiology',
  'ENT',
  'Dentistry',
  'Psychiatry',
  'Physiotherapy',
  'Pharmacy',
]
const doctors = ['Dr. A', 'Dr. B', 'Dr. C', 'Dr. D', 'Dr. E']
const MakeAppointment = ({ isActive, handleClose }) => {
  const [formData, setFormdata] = useState({ date: '', desc: '', doctor: '', department: '' })

  const [status, setStatus] = useState('idle')
  useEffect(() => setStatus('idle'), [isActive])

  const handleChange = (e) => {
    setFormdata({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    setStatus('loading')
    e.preventDefault()
    setTimeout(() => {
      setStatus('success')
      fireToast('success', 'Appointment created')
      setTimeout(() => {
        handleClose()
        fireToast('info', 'Check in later for confirmation')
      }, 1000)
    }, 2000)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Select a department
        <select name="department" value={formData.department} onChange={handleChange}>
          {departments.map((department) => (
            <option key={department} value={department}>
              Department of {department}
            </option>
          ))}
        </select>
      </label>
      <br />

      <label>Select a doctor</label>
      <select name="doctor" value={formData.doctor} onChange={handleChange}>
        {doctors.map((doctor) => (
          <option key={doctor} value={doctor}>
            {doctor}
          </option>
        ))}
      </select>
      <br />

      <label>Enter date and time</label>
      <input type="datetime-local" name="date" value={formData.date} onChange={handleChange} />
      <br />

      <label>Describe your illness</label>
      <input type="text" name="desc" value={formData.desc} onChange={handleChange} />
      <br />

      <AnimatedButton type="submit" status={status}>
        Submit for approval
      </AnimatedButton>
      <RoundButton variant="danger" type="button" handleClick={handleClose}>
        Cancel
      </RoundButton>
    </form>
  )
}
