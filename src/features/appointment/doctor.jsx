import React, { useEffect, useState } from 'react'
import styles from './appointment.module.scss'
import { useDispatch, useSelector } from 'react-redux'

import { RoundButton, AnimatedButton } from 'components/ui/Buttons'
import { fireToast } from 'components/ui/Toast'
import { approveAppointment, fetchAppointments } from './appointmentSlice'
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

  return (
    <div className={styles.appointment}>
      <div className={styles.head}>
        <h2>Appointments</h2>
      </div>

      <div className={styles.past}>
        <h5>Appointments</h5>
        {appList.map((app) => (
          <OneAppointment
            id={app.id}
            key={app.id}
            doctor={doctors.find((doc) => doc.id === app?.doctor)?.full_name}
            department={departments.find((dep) => dep.id === app.department)?.d_name}
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
  const dispatch = useDispatch()
  const appointments = useSelector((state) => state.appointment.appointments)
  const status = useSelector((state) => state.appointment.status)
  const loading = useSelector((state) => state.appointment.loading)
  const error = useSelector((state) => state.appointment.error)
  const data = appointments.find((app) => app.id === id)

  const handleApprove = () => {
    const formdata = { ...data, is_approve: true }
    dispatch(approveAppointment(formdata))
    fireToast('success', 'Marked as approved')
  }
  const handleReject = () => {
    const formdata = { ...data, is_rejected: true }
    dispatch(approveAppointment(formdata))
    fireToast('info', 'Marked as rejected')
  }

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

      {loading && <div>Loading...</div>}
      {error && <div>Error...{error.message}</div>}
      <AnimatedButton status={status} type="button" onClick={handleApprove}>
        Approve
      </AnimatedButton>
      <RoundButton variant="danger" type="button" handleClick={handleReject}>
        Reject
      </RoundButton>
    </div>
  )
}
