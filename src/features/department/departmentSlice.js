import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import * as api from 'api'

const initialState = {
  loading: false,
  status: 'idle',
  departmentList: [],
  error: null,
}

export const fetchDepartments = createAsyncThunk('department/fetch', async () => {
  const response = await api.fetchDepartments()
  return response.data
})

export const departmentSlice = createSlice({
  name: 'department',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  extraReducers: (builder) => {
    builder
      .addCase(fetchDepartments.pending, (state) => {
        state.status = 'loading'
        state.loading = true
      })
      .addCase(fetchDepartments.fulfilled, (state, action) => {
        state.loading = false
        state.status = 'success'
        state.departmentList = [...action.payload]
      })
      .addCase(fetchDepartments.rejected, (state, action) => {
        state.loading = false
        state.status = 'failed'
        state.error = action.error.message
      })
  },
})

// export const { increment, decrement, incrementByAmount } = authSlice.actions
export const departmentList = (state) => state.doctors.departmentList

export default departmentSlice.reducer
