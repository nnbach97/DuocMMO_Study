import { configureStore } from '@reduxjs/toolkit';
import { blogReducer } from './pages/Blogs/reducer/blog.reducer';

export const store = configureStore({
  reducer: {
    blog: blogReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispath = typeof store.dispatch;
