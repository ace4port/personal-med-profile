import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import * as api from './api'

const initialState = {
  loading: false,
  status: 'idle',
  isDoctor: false,
  appointments: [],
  error: null,
}

export const createPrescription = createAsyncThunk('patient/prescription/create', async (formdata) => {
  const response = await api.createApointments(formdata)
  return response.data
})

export const editPrescription = createAsyncThunk('doctor/prescription/edit', async (formdata) => {
  const response = await api.patient_logIn(formdata)
  return response.data
})

export const fetchPrecriptions = createAsyncThunk('patient/prescription/fetch', async () => {
  const response = await api.fetchAll()
  return response.data
})

export const appointmentSlice = createSlice({
  name: 'appointment',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  //   extraReducers: (builder) => {
  //     builder
  //   .addCase(createAppointment.pending, (state) => {
  //     state.status = 'loading'
  //     state.loading = true
  //   })
  //   .addCase(createAppointment.fulfilled, (state, action) => {
  //     state.loading = false
  //     state.status = 'success'
  //     state.appointments = [{ ...state.appointments, ...action.payload }]
  //   })
  //   .addCase(createAppointment.rejected, (state, action) => {
  //     state.loading = false
  //     state.isLoggedIn = false
  //     state.status = 'failed'
  //     state.error = action.error.message
  //   })

  //   .addCase(approveAppointment.pending, (state) => {
  //     state.status = 'loading'
  //     state.loading = true
  //   })
  //   .addCase(approveAppointment.fulfilled, (state, action) => {
  //     state.loading = false
  //     state.status = 'success'
  //     state.appointments = [{ ...state.appointments, ...action.payload }]
  //     // state.user = action.payload
  //   })

  //   .addCase(fetchAppointments.pending, (state) => {
  //     state.status = 'loading'
  //     state.loading = true
  //   })
  //   .addCase(fetchAppointments.fulfilled, (state, action) => {
  //     state.loading = false
  //     state.status = 'success'
  //     state.appointments = [...action.payload]
  //   })
  //   },
})

// export const { increment, decrement, incrementByAmount } = authSlice.actions
export const appointments = (state) => state.appointment.appointments

export default appointmentSlice.reducer
