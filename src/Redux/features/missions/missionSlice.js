import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const url = 'https://api.spacexdata.com/v3/missions';

export const getMissions = createAsyncThunk(
  'missions/getMissions',
  async (_, thunkAPI) => {
    try {
      const resp = await fetch(url);
      if (resp.ok) {
        const data = await resp.json();
        return data;
      }
      throw new Error('Something went wrong');
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
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
      state.missions = state.missions.map((item) => (
        (item.id === payload ? { ...item, reserved: true } : item)
      ));
    },
    leaveMission: (state, { payload }) => {
      state.missions = state.missions.map((item) => (
        (item.id === payload ? { ...item, reserved: false } : item)
      ));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMissions.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMissions.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        const data = payload.map((item) => ({
          id: item.mission_id,
          name: item.mission_name,
          description: item.description,
          reserved: false,
        }));
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
