import api from '../../../api/api';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const signup = createAsyncThunk(
  'auth/register',
  async (
    { firstName, lastName, email, password, phone },
    { rejectWithValue }
  ) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };
      await api.post(
        '/auth/signup',
        { firstName, email, password, lastName, phoneNumber: phone },
        config
      );
    } catch (error) {
      // return custom error message from backend if present
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const login = createAsyncThunk(
  '/auth/signup',
  async ({ phone, password }, { rejectWithValue }) => {
    try {
      // configure header's Content-Type as JSON
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };
      const { data } = await api.post(
        '/auth/login',
        { phoneNumber: phone, password },
        config
      );

      console.log('here');
      return data;
    } catch (error) {
      // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
