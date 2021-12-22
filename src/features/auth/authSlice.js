import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import * as api from 'api'

const initialState = {
  isLoggedIn: false,
  loading: false,
  status: 'idle',
  isDoctor: false,
  user: undefined,
}

// function logInAPI({ email, password }) {
//   return new Promise((resolve) => setTimeout(() => resolve({ data: { email, password } }), 500))
// }

export const logIn = createAsyncThunk('patient/auth/logIn', async ({ email, password }) => {
  // check for token here ~~
  const response = await api.patient_logIn({ email, password })
  localStorage.setItem('token', response.data.token)
  return response.data
})

export const register = createAsyncThunk('patient/auth/register', async (formData) => {
  const response = await api.patient_register(formData)
  return response.data
})

export const doctor_logIn = createAsyncThunk('doctor/auth/logIn', async ({ email, password }) => {
  const response = await api.doctor_logIn({ email, password })
  localStorage.setItem('token', response.data.token)
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
  reducers: {
    logOut: (state) => {
      state.isLoggedIn = false
      state.isDoctor = false
      state.status = 'idle'
      state.user = null
      localStorage.removeItem('token')
    },
    setUser: (state, action) => {
      state.user = action.payload
    },
    logInLocal: (state) => {
      const token = localStorage.getItem('token')
      state.isLoggedIn = token
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(logIn.pending, (state) => {
        state = { ...initialState }
        state.status = 'loading'
        state.loading = true
      })
      .addCase(logIn.fulfilled, (state) => {
        state.loading = false
        state.status = 'success'
        state.isLoggedIn = true
      })
      .addCase(logIn.rejected, (state, action) => {
        state.loading = false
        state.isLoggedIn = false
        state.status = 'failed'
      })

      .addCase(register.pending, (state) => {
        state = { ...initialState }
        state.status = 'loading'
        state.loading = true
      })
      .addCase(register.fulfilled, (state) => {
        state.loading = false
        state.status = 'success'
        state.isLoggedIn = false
        // state.user = action.payload
      })

      .addCase(doctor_logIn.pending, (state) => {
        state = { ...initialState }
        state.status = 'loading'
        state.loading = true
      })
      .addCase(doctor_logIn.fulfilled, (state, action) => {
        state.loading = false
        state.status = 'success'
        state.isLoggedIn = true
        state.isDoctor = true
        state.user = action.payload
      })
      .addCase(doctor_register.pending, (state, action) => {
        state = { ...initialState }
        state.status = 'loading'
        state.loading = true
      })
      .addCase(doctor_register.fulfilled, (state, action) => {
        state.loading = false
        state.status = 'success'
        state.isLoggedIn = false
        state.isDoctor = true
        state.user = action.payload
      })
  },
})

export const { logInLocal, logOut, setUser } = authSlice.actions
export const isLoggedIn = (state) => state.auth.isLoggedIn

export default authSlice.reducer
