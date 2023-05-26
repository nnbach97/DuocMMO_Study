import { createReducer, createAction } from '@reduxjs/toolkit';
import { Post } from '../../../types/blog.type';

const data = [
  {
    id: '1',
    title: 'Mọi công việc thành đạt đều nhờ sự kiên trì và lòng say mê.',
    description:
      'Nghịch cảnh là một phần của cuộc sống. Nó không thể bị kiểm soát. Cái có thể kiểm soát chính là cách chúng ta phản ứng trước nghịch cảnh.',
    publisdDate: '2022-10-13T11:32',
    urlImg:
      'https://images.unsplash.com/photo-1684717417861-9c90fc3a8840?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60',
    publisded: true
  }
];

interface BlogState {
  postList: Post[];
  currentPost: Post | null;
}

const initialState: BlogState = {
  postList: data,
  currentPost: null
};

export const addPost = createAction<Post>('blog/addPost');
export const deletePost = createAction<string>('blog/deletePost');
export const startEdit = createAction<string>('blog/startEdit');
export const saveEdit = createAction<Post>('blog/saveEdit');
export const cancelPost = createAction('blog/cancelPost');

export const blogReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addPost, (state, action) => {
      const post = action.payload;
      state.postList.push(post);
    })
    .addCase(deletePost, (state, action) => {
      const id = action.payload;

      const postIndexId = state.postList.findIndex((item) => item.id === id);

      if (postIndexId !== -1) {
        state.postList.splice(postIndexId, 1);
      }
    })
    .addCase(startEdit, (state, action) => {
      const id = action.payload;

      const postId = state.postList.find((item) => item.id === id);

      state.currentPost = { ...postId } as Post;
    })
    .addCase(saveEdit, (state, action) => {
      const id = action.payload.id;

      state.postList.filter((item, index) => {
        if (item.id === id) {
          state.postList[index] = action.payload;
        }
        return true;
      });

      state.currentPost = null;
    })
    .addCase(cancelPost, (state, action) => {
      state.currentPost = null;
    });
});
