import { useDispatch } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
// import blogReducer from './pages/Blogs/blog.reducer';
// import blogReducer from './pages/Blogs/blog.slice';
import blogReducer from './pages/Blogs/blog.asyncthunk';

export const store = configureStore({
  reducer: { blog: blogReducer }
});

// laays RootState vaf AppDispatch tuwf store cua chung ta

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

// su dung dispatch co type
export const useAppDispatch = () => useDispatch<AppDispatch>();
