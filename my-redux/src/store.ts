import { configureStore } from '@reduxjs/toolkit';
// import blogReducer from './pages/Blogs/blog.reducer';
import blogReducer from './pages/Blogs/blog.slice';

export const store = configureStore({
  reducer: { blog: blogReducer }
});

// laays RootState vaf AppDispatch tuwf store cua chung ta

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
