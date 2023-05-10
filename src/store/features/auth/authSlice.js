import { createSlice } from '@reduxjs/toolkit';
import { login, signup } from './authActions';

const initialState = {
  loading: false,
  userInfo: {}, // for user object
  userToken: null,
  error: null,
  success: false, // for monitoring the registration process.
  isAuth: false
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.userInfo = {};
      state.userToken = null;
      state.isAuth = false;
    }
  },
  extraReducers: {
    // User login
    [login.pending]: (state) => {
      state.loading = true;
      state.error = null;
      state.isAuth = false;
    },
    [login.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.userInfo = payload;
      state.userToken = payload.userToken;
      state.isAuth = true;
      console.log(state.isAuth);
    },
    [login.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      state.isAuth = false;
    },

    // register user reducer
    [signup.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [signup.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true; // registration successful
      state.userInfo = payload;
    },
    [signup.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    }
  }
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
