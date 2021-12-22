import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import * as api from 'api'

const initialState = {
  isLoggedIn: false,
  loading: false,
  status: 'idle',
  user: null,
}

// function logInAPI({ email, password }) {
//   return new Promise((resolve) => setTimeout(() => resolve({ data: { email, password } }), 500))
// }

export const logIn = createAsyncThunk('patient/auth/logIn', async ({ email, password }) => {
  // check for token here ~~
  const response = await api.patient_logIn({ email, password })
  console.log(response)
  localStorage.setItem('token', response.data.token)
  return response.data
})

export const register = createAsyncThunk('patient/auth/register', async (formData) => {
  const response = await api.patient_register(formData)
  return response.data
})

export const doctor_logIn = createAsyncThunk('doctor/auth/logIn', async ({ email, password }) => {
  const response = await api.doctor_logIn({ email, password })
  return response.data
})

export const doctor_register = createAsyncThunk('doctor/auth/register', async (formData) => {
  const response = await api.doctor_register(formData)
  return response.data
})

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  extraReducers: (builder) => {
    builder
      .addCase(logIn.pending, (state) => {
        state.status = 'loading'
        state.loading = true
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.loading = false
        state.status = 'success'
        state.isLoggedIn = true
        state.user = action.payload
      })
      .addCase(logIn.rejected, (state, action) => {
        state.loading = false
        state.isLoggedIn = false
        state.status = 'failed'
      })

      .addCase(register.pending, (state) => {
        state.status = 'loading'
        state.loading = true
      })
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false
        state.status = 'success'
        state.isLoggedIn = true
        state.user = action.payload
      })
  },
})

export const { increment, decrement, incrementByAmount } = authSlice.actions
export const isLoggedIn = (state) => state.auth.isLoggedIn

export default authSlice.reducer
