import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import * as api from './api'

const initialState = {
  loading: false,
  status: 'idle',
  isDoctor: false,
  prescriptions: [],
  medicines: [],
  error: null,
}

export const createPrescription = createAsyncThunk('patient/prescription/create', async (formdata) => {
  const response = await api.createPrescription(formdata)
  return response.data
})

export const editPrescription = createAsyncThunk('doctor/prescription/edit', async (formdata) => {
  const response = await api.editPrescription(formdata)
  return response.data
})

export const fetchPrecriptions = createAsyncThunk('patient/prescription/fetch', async () => {
  const response = await api.fetchAll()
  return response.data
})

export const fetchLatest = createAsyncThunk('patient/prescription/latest/', async () => {
  const response = await api.fetchLatest()
  return response.data
})

export const appointmentSlice = createSlice({
  name: 'appointment',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  extraReducers: (builder) => {
    builder
      .addCase(fetchPrecriptions.pending, (state) => {
        state.status = 'loading'
        state.loading = true
      })
      .addCase(fetchPrecriptions.fulfilled, (state, action) => {
        state.loading = false
        state.status = 'success'
        state.appointments = [{ ...state.appointments, ...action.payload }]
      })
      .addCase(fetchPrecriptions.rejected, (state, action) => {
        state.loading = false
        state.isLoggedIn = false
        state.status = 'failed'
        state.error = action.error.message
      })

      .addCase(fetchLatest.pending, (state) => {
        state.status = 'loading'
        state.loading = true
      })
      .addCase(fetchLatest.fulfilled, (state, action) => {
        state.loading = false
        state.status = 'success'
        state.medicines = [...action.payload]
      })
      .addCase(fetchLatest.rejected, (state, action) => {
        state.loading = false
        state.isLoggedIn = false
        state.status = 'failed'
        state.error = action.error.message
      })

      .addCase(createPrescription.pending, (state) => {
        state.status = 'loading'
        state.loading = true
      })
      .addCase(createPrescription.fulfilled, (state, action) => {
        state.loading = false
        state.status = 'success'
        state.appointments = [{ ...state.appointments, ...action.payload }]
        // state.user = action.payload
      })

      .addCase(editPrescription.pending, (state) => {
        state.status = 'loading'
        state.loading = true
      })
      .addCase(editPrescription.fulfilled, (state, action) => {
        state.loading = false
        state.status = 'success'
        state.appointments = [...action.payload]
      })
  },
})

// export const { increment, decrement, incrementByAmount } = authSlice.actions
export const appointments = (state) => state.appointment.appointments

export default appointmentSlice.reducer
