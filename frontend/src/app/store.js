import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../components/auth/authSlice';
import postSlice from '../pages/ProfilePage/postSlice';
import roomSlice from '../components/RoomForm/roomSlice';

export const store = configureStore({
    reducer: {
      auth:authSlice,
      post:postSlice,
      room:roomSlice,
    }
  });