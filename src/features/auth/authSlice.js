import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoggedIn: false,
  loading: false,
  status: 'idle',
  user: null,
}

function logInAPI({ email, password }) {
  return new Promise((resolve) => setTimeout(() => resolve({ data: { email, password } }), 500))
}

export const logIn = createAsyncThunk('auth/logIn', async ({ email, password }) => {
  const response = await logInAPI({ email, password })
  return response.data
})

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
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
  },
})

export const { increment, decrement, incrementByAmount } = authSlice.actions
export const isLoggedIn = (state) => state.auth.isLoggedIn

export default authSlice.reducer
