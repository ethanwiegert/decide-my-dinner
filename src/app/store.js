import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../mealSlice';

export default configureStore({
  reducer: {
    meal: counterReducer,
  },
});
