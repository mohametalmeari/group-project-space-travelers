import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from './Rocket/rocketSlice';
import missionReducer from './features/missions/missionSlice';

const store = configureStore({
  reducer: {
    rocket: rocketReducer,
    mission: missionReducer,
});

export default store;
