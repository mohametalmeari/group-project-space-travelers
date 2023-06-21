import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from './Rocket/rocketSlice';

const store = configureStore({
  reducer: {
    rocket: rocketReducer,
  },
});

export default store;
