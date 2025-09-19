import { configureStore } from '@reduxjs/toolkit';
import adminSongsReducer from './adminSongsSlice';
import authReducer from './authSlice';

export const store = configureStore({
  reducer: {
    admin: adminSongsReducer,
    auth: authReducer,
  },
});
