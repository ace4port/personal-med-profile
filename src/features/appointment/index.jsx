import React, { useEffect, useState } from 'react'
import styles from './appointment.module.scss'
import { useDispatch, useSelector } from 'react-redux'

import FormModal from 'components/ui/Modals/FormModal'
import { RoundButton, AnimatedButton } from 'components/ui/Buttons'
import { fireToast } from 'components/ui/Toast'
import { approveAppointment, createAppointment, fetchAppointments } from './appointmentSlice'
import { BsPlusLg } from 'react-icons/bs'
import SimpleModal from 'components/ui/Modals/SimpleModal'
import { fetchDoctors } from 'features/doctors/doctorSlice'
import { fetchDepartments } from 'features/department/departmentSlice'

const Appointment = () => {
  const dispatch = useDispatch()

  useEffect(() => dispatch(fetchAppointments()), [dispatch])
  useEffect(() => dispatch(fetchDoctors()), [dispatch])
  useEffect(() => dispatch(fetchDepartments()), [dispatch])

  const appList = useSelector((state) => state.appointment.appointments)

  const doctors = useSelector((state) => state.doctors.doctorList)
  const departments = useSelector((state) => state.department.departmentList)

  const [modal, setmodal] = useState(false)
  return (
    <div className={styles.appointment}>
      <div className={styles.head}>
        <h2>Appointments</h2>
        <RoundButton handleClick={() => setmodal(true)}>
          <BsPlusLg />
          &nbsp; Make an appointment
        </RoundButton>
        <FormModal isActive={modal} closeModal={() => setmodal(false)} title="Make a new appointment">
          <MakeAppointment
            isActive={modal}
            handleClose={() => setmodal(false)}
            doctors={doctors}
            departments={departments}
          />
        </FormModal>
      </div>

      <h4>Appointments on calendar -- op idea .....</h4>

      <div className={styles.past}>
        <h5>Appointments</h5>
        {appList.map((app) => (
          <OneAppointment
            id={app.id}
            key={app.id}
            doctor={doctors.find((doc) => doc.id === app?.doctor).full_name}
            department={departments.find((dep) => dep.id === app.department).d_name}
            date={app.schedule_date_time}
            description={app.description}
            approved={app.is_approve}
          />
        ))}
        {appList.length === 0 && <div>No appointments found</div>}
        <h6>Click on appointment for appointments details</h6>
      </div>
    </div>
  )
}

export default Appointment

const MakeAppointment = ({ isActive, handleClose, doctors, departments }) => {
  const dispatch = useDispatch()
  const [formData, setFormdata] = useState({ schedule_date_time: '', description: '', doctor: 1, department: 1 })

  const [status, setStatus] = useState('idle')
  useEffect(() => setStatus('idle'), [isActive])

  const handleChange = (e) => {
    setFormdata({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('loading')

    dispatch(createAppointment(formData))

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
            <option key={department.id} value={department.id}>
              Department of {department?.d_name}
            </option>
          ))}
        </select>
      </label>
      <br />

      <label>Select a doctor</label>
      <select name="doctor" value={formData.doctor} onChange={handleChange}>
        {doctors.map((doctor) => (
          <option key={doctor.id} value={doctor.id}>
            {doctor?.full_name}
          </option>
        ))}
      </select>
      <br />

      <label>Enter date and time</label>
      <input type="datetime-local" name="schedule_date_time" value={formData.date} onChange={handleChange} />
      <br />

      <label>Describe your illness</label>
      <input type="text" name="description" value={formData.desc} onChange={handleChange} />
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

const OneAppointment = ({ id, date, doctor, department, description, approved }) => {
  const [modal, setModal] = useState(false)
  const openModal = () => setModal(true)
  const closeModal = () => setModal(false)

  return (
    <>
      <div className={styles.appoint} onClick={openModal}>
        <li>
          Appointment {id} {doctor}
          <strong>{new Date(date).toDateString()}</strong>
        </li>
        <p> {approved ? 'Approved' : 'Approval Pending'}</p>
      </div>
      <SimpleModal isActive={modal} closeModal={closeModal}>
        <ModalContents
          date={date}
          doctor={doctor}
          department={department}
          description={description}
          id={id}
          approved={approved}
        />
      </SimpleModal>
    </>
  )
}

const ModalContents = ({ id, doctor, department, is_approve, date, description }) => {
  return (
    <div>
      <h4>Appointment {id} details</h4>
      <p>
        <strong>Department:</strong> Department of {department}
      </p>
      <p>
        <strong>Doctor:</strong> {doctor}
      </p>
      <p>
        <strong>Approved:</strong> {is_approve ? 'Yes' : 'No'}
      </p>
      <p>
        <strong>Date:</strong> {date}
      </p>
      <p>
        <strong>Description:</strong> {description}
      </p>
    </div>
  )
}
