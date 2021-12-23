import { RoundButton } from 'components/ui/Buttons'
import { fireToast } from 'components/ui/Toast'
import { fetchAppointments } from 'features/appointment/appointmentSlice'
import { useDocname } from 'functions/getDocname'
import useFetch from 'hooks/useFetch'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Outlet, Route, Routes, useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { fetchMedicines, createPrescription } from './api'
import { fetchPrecriptions, storewithPresc } from './prescriptionSlice'

const Card = styled.div.attrs(() => ({
  className: 'card',
}))`
  h5 {
    margin: 0;
  }
  cursor: pointer;
  &:hover {
    background-color: #d0d0ff;
  }
  //   width: 250px;
`

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`

const PrecriptionDoctor = () => {
  const dispatch = useDispatch()
  useEffect(() => dispatch(fetchAppointments()), [dispatch])
  useEffect(() => dispatch(fetchPrecriptions()), [dispatch])

  return (
    <div>
      <Routes>
        <Route>
          <Route index element={<AppList />} />
          <Route path=":id" element={<SingleAppointment />} />
        </Route>
      </Routes>

      <Outlet />
    </div>
  )
}

export default PrecriptionDoctor

const AppList = () => {
  const dispatch = useDispatch()
  const prescriptions = useSelector((state) => state.prescription.prescriptions)
  const appointments = useSelector((state) => state.appointment.appointments)
  const status = useSelector((state) => state.prescription.status)

  const App_withPresc =
    status === 'success' &&
    appointments.map((app) => {
      return { ...app, hasPrescription: prescriptions.find((p) => p.appointment === app.id) ? true : false }
    })

  useEffect(() => dispatch(storewithPresc(App_withPresc)), [dispatch, App_withPresc])

  return (
    <>
      <h4>Choose an apointment to write Prescription</h4>
      <Container>
        {App_withPresc.length &&
          App_withPresc.map((appointment) => <AppointmentCard key={appointment?.id} appointment={appointment} />)}
      </Container>
    </>
  )
}

const AppointmentCard = ({ appointment }) => {
  //   const [modalOpen, setModalOpen] = React.useState(false)
  //   const openModal = () => setModalOpen(true)
  //   const closeModal = () => setModalOpen(false)
  const nav = useNavigate()
  const redirect = () => nav(`./${appointment.id}`)
  const docName = useDocname(appointment.doctor)
  return (
    <>
      <Card onClick={redirect}>
        <h5>{new Date(appointment.schedule_date_time).toDateString()}</h5>
        <h5>
          Approval status: {appointment.is_approve ? 'Approved' : appointment.is_rejected ? 'Rejected' : 'Pending'}
        </h5>
        <p>Description: {appointment.description}</p>
        <h5>Patient Name: {appointment.patient}</h5>
        <h5>Doctor: {docName}</h5>
        <h5>Has prescription: {appointment.hasPrescription ? 'True' : 'False'}</h5>
      </Card>
      {/* <FormModal isActive={modalOpen} closeModal={closeModal}>
        <Form appointment={appointment} />
      </FormModal> */}
    </>
  )
}

const SingleAppointment = () => {
  const { id } = useParams()
  const appointment = useSelector((state) => state.prescription.appointments.find((app) => app.id === parseInt(id)))
  const docName = useDocname(appointment?.doctor)

  useEffect(() => {
    if (appointment?.is_rejected) {
      alert('Appointment is rejected')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const [data, loading, error] = useFetch(fetchMedicines, id, null, appointment.hasPrescription)
  console.log(data)

  return (
    <div>
      <Link to="../">Back</Link>
      <div className="card">
        <h5>{new Date(appointment.schedule_date_time).toDateString()}</h5>
        <h5>
          Approval status: {appointment.is_approve ? 'Approved' : appointment.is_rejected ? 'Rejected' : 'Pending'}
        </h5>
        <p>Description: {appointment.description}</p>
        <h5>Patient Name: {appointment.patient}</h5>
        <h5>Doctor: {docName}</h5>
        <h2>{!appointment.hasPrescription ? 'No prescription for this appointment' : 'Prescription medicines'}</h2>

        {!appointment.hasPrescription ? (
          <Form appointment={appointment} />
        ) : (
          <>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            {!data.length && <p>No medicines prescribed during this appointment</p>}
          </>
        )}
      </div>
    </div>
  )
}

const Form = ({ appointment }) => {
  const [medicineList, setMedicineList] = useState([])
  const [description, setDescription] = useState('')

  const addMedicine = () => {
    setMedicineList([
      ...medicineList,
      {
        id: medicineList.length,
        medicine_name: '',
        morning: false,
        day: false,
        night: false,
        after_milk: false,
        no_of_days: 0,
      },
    ])
  }
  let res = null
  const submitPresc = async () => {
    const formdata = {
      appointment: appointment.id,
      description: description,
    }
    res = await createPrescription(formdata).then(fireToast('success', 'Prescription created'))
    console.log(res)
  }

  return (
    <form>
      <label>
        Description:
        <input
          type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Precription"
        />
      </label>
      <RoundButton handleClick={submitPresc}>Submit prescription</RoundButton>
      <RoundButton onClick={addMedicine}>Submit medicine</RoundButton>
      {medicineList.map((med, index) => (
        <MedicineForm key={index} prescriptionId={1} />
      ))}
      {res && JSON.stringify(res)}
    </form>
  )
}
const MedicineForm = ({ prescriptionId }) => {
  const [medicine, setMedicine] = useState({
    medicine_name: '',
    morning: false,
    day: false,
    night: false,
    after_milk: false,
    no_of_days: 0,
    prescription: prescriptionId,
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(medicine)
  }
  const handleChange = (e) => setMedicine({ ...medicine, [e.target.name]: e.target.value })
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Medicine:
        <input
          type="text"
          placeholder="Medicine"
          name="medicine_name"
          value={medicine.medicine_name}
          onChange={handleChange}
        />
      </label>

      <h4>Times:</h4>
      <label>
        Morning
        <input type="checkbox" name="morning" value={medicine.morning} onChange={handleChange} />
      </label>
      <label>
        Day
        <input type="checkbox" name="day" value={medicine.day} onChange={handleChange} />
      </label>
      <label>
        Night
        <input type="checkbox" name="night" value={medicine.night} onChange={handleChange} />
      </label>

      <label>
        Numer of days:
        <input
          type="text"
          placeholder="Medicine"
          name="no_of_days"
          value={medicine.no_of_days}
          onChange={handleChange}
        />
      </label>
    </form>
  )
}
