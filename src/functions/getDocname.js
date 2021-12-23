import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchDoctors } from 'features/doctors/doctorSlice'

export const useDocname = (id) => {
  const dispatch = useDispatch()
  useEffect(() => dispatch(fetchDoctors()), [dispatch])

  const doctors = useSelector((state) => state.doctors.doctorList)

  const doc = doctors.length && doctors.find((doc) => doc.id === id)
  return doc?.full_name
}
