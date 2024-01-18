import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createUser } from './authAPI';

const initialState = {
  loggedInUser:null,
  status: 'idle',
  error:null,
};

export const createUserAsync = createAsyncThunk(
  'user/createUser',
  async (userData) => {
    const response = await createUser(userData);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUserAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createUserAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        console.log(state.loggedInUser);

        console.log(action.payload);
        state.loggedInUser= action.payload;
      })
  },
});

// export const { increment } = authSlice.actions;

export const selectLoggedInUser = (state) => state.auth.loggedInUser;
export const selectError = (state)=>state.auth.error; 
export default authSlice.reducer;