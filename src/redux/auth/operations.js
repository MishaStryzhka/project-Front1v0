import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://project-back1v0.onrender.com/api';

// Utility to add JWT
export const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Utility to remove JWT
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

/*
 * POST @ /users/register
 * body: { email, password }
 */
export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('users/register', credentials);
      // After successful registration, add the token to the HTTP header
      setAuthHeader(res.data.user.token);

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({
        status: error.response.status,
        message: error.response.data.message,
      });
    }
  }
);

/*
 * PATCH @ /users/current/update
 * headers: Authorization: Bearer token
 * body: { userType }
 */
export const updateUserType = createAsyncThunk(
  'auth/updateUserType',
  async (credentials, thunkAPI) => {
    const { userType } = credentials;
    try {
      const res = await axios.patch('/users/current/userType', {
        userType,
      });

      return res.data.user.userType;
    } catch (error) {
      return thunkAPI.rejectWithValue({
        status: error.response.status,
        message: error.response.data.message,
      });
    }
  }
);

/*
 * POST @ /users/login
 * body: { email, password }
 */
export const logIn = createAsyncThunk(
  'auth/login',
  async ({ email, password, rememberMe }, thunkAPI) => {
    try {
      const res = await axios.post('/users/login', { email, password });
      // After successful login, add the token to the HTTP header
      setAuthHeader(res.data.user.token);

      return {
        ...res.data.user,
        token: rememberMe ? res.data.user.token : null,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue({
        status: error.response.status,
        message: error.response.data.message,
      });
    }
  }
);

/*
 * POST @ /users/logout
 * headers: Authorization: Bearer token
 */
export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    // After a successful logout, remove the token from the HTTP header
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

/*
 * GET @ /users/current
 * headers: Authorization: Bearer token
 */
export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    // Reading the token from the state via getState()
    const state = thunkAPI.getState();

    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      // If there is no token, exit without performing any request
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      // If there is a token, add it to the HTTP header and perform the request
      setAuthHeader(persistedToken);
      const res = await axios.get('/users/current');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/*
 * PATCH @ /users/current/update
 * headers: Authorization: Bearer token
 */
export const updateUserInfo = createAsyncThunk(
  'auth/update',
  async (
    {
      avatar,
      lastName,
      firstName,
      patronymic,
      phones,
      contactMethods,
      dateOfBirthday,
      experienceYears,
      educations,
    },
    thunkAPI
  ) => {
    try {
      const formData = new FormData();
      formData.append('avatar', avatar);
      formData.append('lastName', lastName);
      formData.append('firstName', firstName);
      formData.append('patronymic', patronymic);
      formData.append('dateOfBirthday', dateOfBirthday);
      formData.append('phones', phones || '');
      formData.append('contactMethods', contactMethods || '');
      formData.append('experienceYears', experienceYears || '');
      formData.append(
        'educations',
        educations ? JSON.stringify(educations) : ''
      );

      const response = await axios.put(`/users/current/update`, formData, {
        headers: { 'content-type': 'multipart/form-data' },
      });

      return { user: response.data.user, status: response.status };
      // const user = { avatar, name, email, phone, city, birthday };
      // return user;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/*
 * DELETE @ users/current
 * headers: Authorization: Bearer token
 */
export const removeAccount = createAsyncThunk(
  'auth/deleteAccount',
  async (_, thunkAPI) => {
    try {
      await axios.delete('users/delete');
      clearAuthHeader();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/*
 * PUTCH @ users/refreshPassword
 * headers: Authorization: Bearer token
 * body: { password, newPassword }
 */
export const refreshPassword = createAsyncThunk(
  'auth/refreshPassword',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.patch(
        'users/current/refreshPassword',
        credentials
      );

      // setAuthHeader(res.data.user.token);

      return { data: res.data, status: res.status };
    } catch (error) {
      return thunkAPI.rejectWithValue({
        status: error.response.status,
        message: error.response.data.message,
      });
    }
  }
);

/*
 * PUTCH @ users/refreshEmail
 * headers: Authorization: Bearer token
 * body: { password, newPassword }
 */
export const refreshEmail = createAsyncThunk(
  'auth/refreshEmail',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.patch('users/current/refreshEmail', credentials);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({
        status: error.response.status,
        message: error.response.data.message,
      });
    }
  }
);
