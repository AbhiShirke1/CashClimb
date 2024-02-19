import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createRoom } from './roomAPI';

const initialState = {
  createdRoom: null,
  status: 'idle',
  error: null,
};

export const createRoomAsync = createAsyncThunk(
  'room/createRoom',
  async (userData) => {
    const response = await createRoom(userData);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);




export const roomSlice = createSlice({
  name: 'room',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createRoomAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createRoomAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.createdRoom = action.payload;
      })
  },
});


export default roomSlice.reducer;