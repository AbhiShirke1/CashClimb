
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createPost, getAllPosts, getOwnPosts } from './postAPI';
// import { getAllPosts } from '../../../../backend/controllers/postController';

const initialState = {
  createdPost: null,
  posts: [],  // Change this line to hold an array of posts
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

export const getOwnPostsAsync = createAsyncThunk(
  'post/getOwnPosts',
  async () => {
    const response = await getOwnPosts();
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);
export const getAllPostsAsync = createAsyncThunk(
  'post/getAllPosts',
  async () => {
    const response = await getAllPosts();
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload;
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
      .addCase(getOwnPostsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getOwnPostsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.posts = action.payload; // Update posts array instead of createdPost
      })
      .addCase(getAllPostsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getAllPostsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.posts = action.payload; // Update posts array instead of createdPost
      })
  },
});

export const { addPost, setPosts } = postSlice.actions;

export default postSlice.reducer;
