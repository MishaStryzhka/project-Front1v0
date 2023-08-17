import { createSlice } from '@reduxjs/toolkit';
import {
  register,
  logIn,
  logOut,
  refreshUser,
  updateUserInfo,
  updateUserType,
  // saveToken,
} from './operations';

const initialState = {
  user: null,
  token: null,
  userType: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
  currentTheme: 'light',
  isFirstLogin: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    saveToken: (state, { payload }) => {
      console.log('payload', payload);
      state.token = payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = { email: action.payload.user.email };
        state.token = action.payload.user.token;
        state.error = null;
        state.isLoggedIn = true;
        state.isFirstLogin = true;
      })
      .addCase(register.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(updateUserType.fulfilled, (state, action) => {
        console.log('action', action.payload);

        state.userType = action.payload;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload;
        state.token = action.payload.token;
        state.userType = action.payload.userType;
        state.error = null;
        state.isLoggedIn = true;
        state.isFirstLogin = false;
      })
      .addCase(logIn.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(logOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.userType = null;
        state.isLoggedIn = false;
        state.isFirstLogin = false;
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        console.log('action.payload', action.payload);

        state.user = action.payload.user;
        state.userType = action.payload.user.userType || null;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.isFirstLogin = false;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
        state.token = null;
      })
      .addCase(updateUserInfo.fulfilled, (state, action) => {
        console.log(action.payload);
        state.user = action.payload;
      })
      .addCase(updateUserInfo.rejected, (state, action) => {
        state.error = action.payload;
        console.log(action.payload);
      });
  },
});

export const authReducer = authSlice.reducer;
export const { saveToken } = authSlice.actions;
