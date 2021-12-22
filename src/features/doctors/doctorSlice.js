import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import * as api from 'api'

const initialState = {
  loading: false,
  status: 'idle',
  doctorList: [],
  error: null,
}

export const fetchDoctors = createAsyncThunk('doctors/fetch', async () => {
  const response = await api.fetchDoctors()
  return response.data
})

export const doctorsSlice = createSlice({
  name: 'doctors',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  extraReducers: (builder) => {
    builder
      .addCase(fetchDoctors.pending, (state) => {
        state.status = 'loading'
        state.loading = true
      })
      .addCase(fetchDoctors.fulfilled, (state, action) => {
        state.loading = false
        state.status = 'success'
        state.doctorList = [...action.payload]
      })
      .addCase(fetchDoctors.rejected, (state, action) => {
        state.loading = false
        state.isLoggedIn = false
        state.status = 'failed'
        state.error = action.error.message
      })
  },
})

// export const { increment, decrement, incrementByAmount } = authSlice.actions
export const doctors = (state) => state.doctors.doctorList

export default doctorsSlice.reducer
