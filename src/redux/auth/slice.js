import { createSlice } from '@reduxjs/toolkit';
import {
  register,
  logIn,
  logOut,
  refreshUser,
  updateUserInfo,
  updateUserType,
  removeAccount,
  refreshEmail,
  refreshPassword,
} from './operations';

const initialState = {
  user: null,
  token: null,
  userType: null,
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
  error: null,
  currentTheme: 'light',
  isFirstLogin: false,
  response: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    saveToken: (state, { payload }) => {
      state.token = payload;
    },
    resetResponse: (state, { payload }) => {
      state.response = payload;
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
        state.isLoggedIn = true;
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
        state.user = action.payload;
      })
      .addCase(updateUserInfo.rejected, (state, action) => {
        console.log(action.payload);
      })
      .addCase(removeAccount.fulfilled, (state, action) => {
        state.user = null;
        state.token = null;
        state.userType = null;
        state.isLoggedIn = null;
      })
      .addCase(refreshEmail.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshEmail.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isRefreshing = false;
      })
      .addCase(refreshEmail.rejected, (state, action) => {
        console.log('action', action);
      })
      .addCase(refreshPassword.pending, state => {
        state.isLoading = true;
      })
      .addCase(refreshPassword.fulfilled, (state, action) => {
        // console.log('action', action);
        state.isLoading = false;
        state.response = { status: action.payload.status };
        // state.user = action.payload.user;
      })
      .addCase(refreshPassword.rejected, (state, action) => {
        state.isLoading = false;
        // console.log('action', action);
        state.error = action.payload;
      });
  },
});

export const authReducer = authSlice.reducer;
export const { saveToken, resetResponse } = authSlice.actions;
