import { createSlice } from '@reduxjs/toolkit';
import { Post } from '../../types/blog.type';
import type { PayloadAction } from '@reduxjs/toolkit';

interface BlogState {
  postList: Post[];
  currentItem: Post | null;
}

const initialState: BlogState = {
  postList: [],
  currentItem: null
};

// createSlice

const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    addPost: (state, action: PayloadAction<Post>) => {
      const data = action.payload;
      state.postList.push(data);
    },
    deletePost: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      const findIndex = state.postList.findIndex((item) => item.id === id);

      if (findIndex !== -1) {
        state.postList.splice(findIndex, 1);
      }
    },
    startClickEdit: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      const findItem = state.postList.find((item) => item.id === id);

      if (findItem) {
        state.currentItem = { ...findItem };
      }
    },
    saveClickEdit: (state, action: PayloadAction<Post>) => {
      const id = action.payload.id;
      state.postList.filter((item, index) => {
        if (item.id === id) {
          state.postList[index] = action.payload;
        }

        return false;
      });
      state.currentItem = null;
    },
    cancelPost: (state) => {
      state.currentItem = null;
    }
  },
  extraReducers(builder) {
    builder
      .addCase('blog/getPostListSuccess', (state, action: any) => {
        state.postList = [...action.payload];
      })
      .addCase('blog/getPostListFailed', (state, action: any) => {
        alert('Đã có lỗi: ' + action.payload);
      });
  }
});

export const { addPost, cancelPost, deletePost, saveClickEdit, startClickEdit } = blogSlice.actions;
const blogReducer = blogSlice.reducer;
export default blogReducer;
