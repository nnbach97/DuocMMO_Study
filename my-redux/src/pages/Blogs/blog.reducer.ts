import { createReducer, createAction } from '@reduxjs/toolkit';
import { Post } from '../../types/blog.type';

const data = [
  {
    id: '1',
    title: 'Mọi công việc thành đạt đều nhờ sự kiên trì và lòng say mê.',
    description:
      'Nghịch cảnh là một phần của cuộc sống. Nó không thể bị kiểm soát. Cái có thể kiểm soát chính là cách chúng ta phản ứng trước nghịch cảnh.',
    publicDate: '2022-10-13T11:32',
    publish: false,
    imageUrl:
      'https://images.unsplash.com/photo-1665412019489-1928d5afa5cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80'
  },
  {
    id: '2',
    title: 'Mọi công việc thành đạt đều nhờ sự kiên trì và lòng say mê.',
    description:
      'Nghịch cảnh là một phần của cuộc sống. Nó không thể bị kiểm soát. Cái có thể kiểm soát chính là cách chúng ta phản ứng trước nghịch cảnh.',
    publicDate: '2022-10-13T11:32',
    publish: false,
    imageUrl:
      'https://images.unsplash.com/photo-1665412019489-1928d5afa5cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80'
  },
  {
    id: '3',
    title: 'Mọi công việc thành đạt đều nhờ sự kiên trì và lòng say mê.',
    description:
      'Nghịch cảnh là một phần của cuộc sống. Nó không thể bị kiểm soát. Cái có thể kiểm soát chính là cách chúng ta phản ứng trước nghịch cảnh.',
    publicDate: '2022-10-13T11:32',
    publish: false,
    imageUrl:
      'https://images.unsplash.com/photo-1665412019489-1928d5afa5cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80'
  }
];

interface BlogState {
  postList: Post[];
  currentItem: Post | null;
}

const initialState: BlogState = {
  postList: data,
  currentItem: null
};

export const addPost = createAction<Post>('blog/addPost');
export const deletePost = createAction<string>('blog/deletePost');
export const startClickEdit = createAction<string>('blog/startClickEdit');
export const saveClickEdit = createAction<Post>('blog/saveClickEdit');
export const cancelPost = createAction('blog/cancelPost');

const blogReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addPost, (state, action) => {
      const data = action.payload;
      state.postList.push(data);
    })
    .addCase(deletePost, (state, action) => {
      const id = action.payload;
      const findIndex = state.postList.findIndex((item) => item.id === id);

      if (findIndex !== -1) {
        state.postList.splice(findIndex, 1);
      }
    })
    .addCase(startClickEdit, (state, action) => {
      const id = action.payload;
      const findItem = state.postList.find((item) => item.id === id);

      if (findItem) {
        state.currentItem = { ...findItem };
      }
    })
    .addCase(saveClickEdit, (state, action) => {
      const id = action.payload.id;
      state.postList.filter((item, index) => {
        if (item.id === id) {
          state.postList[index] = action.payload;
        }

        return false;
      });
      state.currentItem = null;
    })
    .addCase(cancelPost, (state) => {
      state.currentItem = null;
    });
});

export default blogReducer;
