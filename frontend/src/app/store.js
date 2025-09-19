import { configureStore } from '@reduxjs/toolkit';
import adminSongsReducer from './adminSongsSlice';
import userReducer from './userSlice';
import authReducer from './authSlice';

export const store = configureStore({
  reducer: {
    admin: adminSongsReducer,
    user: userReducer,
    auth: authReducer,
  },
});
