import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://project-back1v0.onrender.com';

// Utility to add JWT
const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Utility to remove JWT
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

/*
 * POST @ /users/register
 * body: { name, email, password }
 */
export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('api/users/register', credentials);
      // After successful registration, add the token to the HTTP header
      setAuthHeader(res.data.user.token);

      return res.data;
    } catch (error) {
      console.log('error', error);

      return thunkAPI.rejectWithValue({
        status: error.response.status,
        message: error.response.data.message,
      });
    }
  }
);

// export const saveToken = createAsyncThunk('auth/saveToken', async token => {
//   console.log('token', token);

//   const promise = new Promise((res, rej) => {
//     res(token);
//   });

//   promise.then(value => {
//     return value;
//   });
// });

export const updateUserType = createAsyncThunk(
  'auth/updateUserType',
  async (credentials, thunkAPI) => {
    const { userType, accessToken } = credentials;

    accessToken && setAuthHeader(accessToken);
    try {
      const res = await axios.patch('/api/users/current/userType', {
        userType,
      });

      console.log('res', res);

      return res.data.user.userType;
    } catch (error) {
      console.log('error', error);

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
      const res = await axios.post('/api/users/login', { email, password });
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
    await axios.post('/api/users/logout');
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
      const res = await axios.get('/api/users/current');
      // console.log('res.data', res.data.user);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const updateUserInfo = createAsyncThunk(
  'auth/update',
  async ({ avatar, name, email, phone, city, birthday }, thunkAPI) => {
    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('email', email);
      formData.append('phone', phone || '');
      formData.append('city', city || '');
      formData.append('birthday', birthday || '');

      const response = await axios.patch(
        `/api/users/current/update`,
        formData,
        { headers: { 'content-type': 'multipart/form-data' } }
      );
      return response.data;
      // const user = { avatar, name, email, phone, city, birthday };
      // return user;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
