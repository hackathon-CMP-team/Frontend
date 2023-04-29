import { createSlice } from '@reduxjs/toolkit'
import { login, signup } from './authActions'

const initialState = {
  loading: false,
  userInfo: {}, // for user object
  userToken: null, // for storing the JWT
  error: null,
  success: false, // for monitoring the registration process.
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: {
    // User login
    [login.pending]: (state) => {
      state.loading = true
      state.error = null
    },
    [login.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.userInfo = payload
      state.userToken = payload.userToken
    },
    [login.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },

    // register user reducer
    [signup.pending]: (state) => {
      state.loading = true
      state.error = null
    },
    [signup.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.success = true // registration successful
    },
    [signup.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },

  },
})

export default authSlice.reducer
