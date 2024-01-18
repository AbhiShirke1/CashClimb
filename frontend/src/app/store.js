import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../components/auth/authSlice';

export const store = configureStore({
    reducer: {
      auth:authSlice,
    }
  });