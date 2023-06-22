import { configureStore } from '@reduxjs/toolkit';
import missionReducer from './features/missions/missionSlice';

const store = configureStore({
  reducer: {
    mission: missionReducer,
  },
});

export default store;
