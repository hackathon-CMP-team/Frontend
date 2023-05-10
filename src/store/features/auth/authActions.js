import api from '../../../api/api';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const signup = createAsyncThunk(
  'auth/register',
  async (
    {
      firstName,
      lastName,
      email,
      password,
      phone,
      isAdult,
      gender,
      confPassword,
      parentPhone,
      birthDate
    },
    { rejectWithValue }
  ) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };

      console.log({
        name: [firstName, lastName].join(' '),
        email,
        password,
        phoneNumber: phone,
        dateOfBirth: birthDate,
        role: isAdult ? 'parent' : 'child',
        gender,
        parentPhoneNumber: isAdult ? null : parentPhone
      });
      const response = await api.post(
        '/auth/signup',
        {
          name: [firstName, lastName].join(' '),
          email,
          password,
          phoneNumber: phone,
          dateOfBirth: birthDate,
          role: isAdult ? 'parent' : 'child',
          gender,
          parentPhoneNumber: isAdult ? null : parentPhone
        },
        config
      );
      console.log(response.headers);
      return response.data;
    } catch (error) {
      // return custom error message from backend if present
      if (error.response && error.response.data.message) {
        console.log(error);
        return rejectWithValue(error.response.data.message);
      } else {
        console.log(error);
        return rejectWithValue(error.message);
      }
    }
  }
);

export const login = createAsyncThunk(
  '/auth/login',
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

      console.log(data);
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
