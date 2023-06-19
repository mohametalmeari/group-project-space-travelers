import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://api.spacexdata.com/v3/missions';

export const getMissions = createAsyncThunk(
  'missions/getMissions',
  async (thunkAPI) => {
    try {
      const resp = await axios.get(url);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('somthing went wrong');
    }
  },
);
const initialState = {
  missions: [],
  isLoading: true,
  error: undefined,
};

const missionSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    joinMission: (state, { payload }) => {
      state.missions.map((item) => {
        if (item.id === payload) {
          item.reserved = true;
        }
        return item;
      });
    },
    leaveMission: (state, { payload }) => {
      state.missions.map((item) => {
        if (item.id === payload) {
          item.reserved = false;
        }
        return item;
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMissions.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMissions.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        const data = payload.map((item) => (
          {
            id: item.mission_id,
            name: item.mission_name,
            description: item.description,
            reserved: false,
          }
        ));
        state.missions = data;
      })
      .addCase(getMissions.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const { joinMission, leaveMission } = missionSlice.actions;

export default missionSlice.reducer;
