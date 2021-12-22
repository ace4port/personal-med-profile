import { configureStore } from '@reduxjs/toolkit'

import counterReducer from 'features/counter/counterSlice'
import authReducer from 'features/auth/authSlice'
import doctorsReducer from 'features/doctors/doctorSlice'
import departmentReducer from 'features/department/departmentSlice'
// import prescriptionReducer from 'features/prescription/prescriptionSlice'
import appointmentReducer from 'features/appointment/appointmentSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    doctors: doctorsReducer,
    department: departmentReducer,
    appointment: appointmentReducer,
    // prescription: prescriptionReducer,
  },
})
