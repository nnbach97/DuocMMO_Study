import { AsyncThunk, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Post } from '../../types/blog.type';
import type { PayloadAction } from '@reduxjs/toolkit';
import http from '../../utils/http';

type GenericAsyncThunk = AsyncThunk<unknown, unknown, any>;

type PendingAction = ReturnType<GenericAsyncThunk['pending']>;
type RejectedAction = ReturnType<GenericAsyncThunk['rejected']>;
type FulfilledAction = ReturnType<GenericAsyncThunk['fulfilled']>;

interface BlogState {
  postList: Post[];
  currentItem: Post | null;
  loading: boolean;
  currentRequestId: undefined | string;
}

const initialState: BlogState = {
  postList: [],
  currentItem: null,
  loading: false,
  currentRequestId: undefined
};

export const getPostList = createAsyncThunk('blog/getPostList', async (_, thunkAPI) => {
  const response = await http.get<Post[]>('posts', { signal: thunkAPI.signal });

  return response.data;
});

export const addPost = createAsyncThunk('blog/addPost', async (body: Omit<Post, 'id'>, thunkAPI) => {
  const response = await http.post<Post>('posts', body, { signal: thunkAPI.signal });

  return response.data;
});

export const deletePost = createAsyncThunk('blog/deletePost', async (id: string, thunkAPI) => {
  const response = await http.delete<string>(`posts/${id}`, { signal: thunkAPI.signal });

  return response.data;
});

export const updatePost = createAsyncThunk(
  'blog/updatePost',
  async ({ id, body }: { id: string; body: Omit<Post, 'id'> }, thunkAPI) => {
    const response = await http.put<Post>(`posts/${id}`, body, { signal: thunkAPI.signal });

    return response.data;
  }
);

// createSlice

const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    startClickEdit: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      const findItem = state.postList.find((item) => item.id === id);

      if (findItem) {
        state.currentItem = { ...findItem };
      }
    },
    cancelPost: (state) => {
      state.currentItem = null;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(getPostList.fulfilled, (state, action) => {
        console.log(action);

        state.postList = [...action.payload];
      })
      .addCase(addPost.fulfilled, (state, action) => {
        console.log(action);

        const data = action.payload;
        state.postList.push(data);
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        const id = action.meta.arg;
        const findIndex = state.postList.findIndex((item) => item.id === id);

        if (findIndex !== -1) {
          state.postList.splice(findIndex, 1);
        }
      })
      .addCase(updatePost.fulfilled, (state, action) => {
        console.log(action);

        const id = action.payload.id;
        state.postList.filter((item, index) => {
          if (item.id === id) {
            state.postList[index] = action.payload;
          }

          return false;
        });
        state.currentItem = null;
      })
      .addMatcher<PendingAction>(
        (action) => action.type.endsWith('/pending'),
        (state, action) => {
          state.loading = true;
          state.currentRequestId = action.meta.requestId;
        }
      )
      .addMatcher<FulfilledAction | RejectedAction>(
        (action) => action.type.endsWith('/fulfilled') || action.type.endsWith('/rejected'),
        (state, action) => {
          if (state.loading && state.currentRequestId === action.meta.requestId) {
            state.loading = false;
            state.currentRequestId = undefined;
          }
        }
      );
  }
});

export const { cancelPost, startClickEdit } = blogSlice.actions;
const blogReducer = blogSlice.reducer;
export default blogReducer;
