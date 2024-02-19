import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createPost } from './postAPI';

const initialState = {
  createdPost: null,
  status: 'idle',
  error: null,
};

export const createPostAsync = createAsyncThunk(
  'post/createPost',
  async (userData) => {
    const response = await createPost(userData);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);




export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createPostAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createPostAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.createdPost = action.payload;
      })
  },
});


export default postSlice.reducer;