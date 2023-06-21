import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const baseAPI = 'https://api.spacexdata.com/v4/rockets';
export const fetchRocket = createAsyncThunk('rockets/fetchRocket', async () => {
  try {
    const response = await axios.get(baseAPI);
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw new Error('Something went wrong');
  }
});
console.log(fetchRocket());
const initialState = {
  rockets: [],
  isLoading: false,
  error: null,
};

const rocketSlice = createSlice({
  name: 'rocket',
  initialState,
  reducers: {
    reserveRocket: (state, action) => {
      const rocketId = action.payload;
      state.rockets = state.rockets.map((rocketItems) => {
        if (rocketItems.id === rocketId) {
          return { ...rocketItems, reserved: true };
        }
        return rocketItems;
      });
    },
    reservedCancel: (state, action) => {
      const rocketId = action.payload;
      state.rockets = state.rockets.map((rocketItems) => {
        if (rocketItems.id === rocketId) {
          return { ...rocketItems, reserved: false };
        }
        return rocketItems;
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRocket.pending, (state) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(fetchRocket.fulfilled, (state, action) => {
        state.rockets = action.payload.map((rocket) => ({
          id: rocket.id,
          rocket_name: rocket.name,
          description: rocket.description,
          flickr_images: rocket.flickr_images,
          reserved: false,
        }));
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchRocket.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
      });
  },
});
export const { reserveRocket, reservedCancel } = rocketSlice.actions;
export default rocketSlice.reducer;
