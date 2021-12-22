import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import * as api from './api'

const initialState = {
  loading: false,
  status: 'idle',
  isDoctor: false,
  appointments: [],
  error: null,
}

export const createAppointment = createAsyncThunk('patient/appointment/create', async (formdata) => {
  const response = await api.createAppointments(formdata)
  return response.data
})

export const approveAppointment = createAsyncThunk('doctor/appointment/approve', async (formdata) => {
  const response = await api.approveAppointment(formdata.id, formdata)
  return response.data
})

export const editAppointment = createAsyncThunk('doctor/appointment/edit', async (formdata) => {
  const response = await api.patient_logIn(formdata)
  return response.data
})

export const fetchAppointments = createAsyncThunk('patient/appointment/fetch', async () => {
  const response = await api.fetchAppointments()
  return response.data
})

export const appointmentSlice = createSlice({
  name: 'appointment',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  extraReducers: (builder) => {
    builder
      .addCase(createAppointment.pending, (state) => {
        state.status = 'loading'
        state.loading = true
      })
      .addCase(createAppointment.fulfilled, (state, action) => {
        state.loading = false
        state.status = 'success'
        state.appointments = [{ ...state.appointments }, action.payload]
      })
      .addCase(createAppointment.rejected, (state, action) => {
        state.loading = false
        state.isLoggedIn = false
        state.status = 'failed'
        state.error = action.error.message
      })

      .addCase(approveAppointment.pending, (state) => {
        state.status = 'loading'
        state.loading = true
      })
      .addCase(approveAppointment.fulfilled, (state, action) => {
        state.loading = false
        state.status = 'success'
        state.appointments = [{ ...state.appointments, ...action.payload }]
        // state.user = action.payload
      })
      .addCase(approveAppointment.rejected, (state, action) => {
        state.loading = false
        state.status = 'failed'
        state.error = action.error.message
      })

      .addCase(fetchAppointments.pending, (state) => {
        state.status = 'loading'
        state.loading = true
      })
      .addCase(fetchAppointments.fulfilled, (state, action) => {
        state.loading = false
        state.status = 'success'
        state.appointments = [...action.payload]
      })
  },
})

// export const { increment, decrement, incrementByAmount } = authSlice.actions
export const appointments = (state) => state.appointment.appointments

export default appointmentSlice.reducer
