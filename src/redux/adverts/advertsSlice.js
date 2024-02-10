import { createSlice } from '@reduxjs/toolkit';
import { getAllAdverts } from '../rentalCars-api';

const advertsSlice = createSlice({
  name: 'adverts',
  initialState: {
    adverts: [],
    total: 0,
    isShowModal: false,
    isLoading: false,
    isError: null,
  },
  reducers: {
    setResetState(state) {
      state.adverts = [];
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getAllAdverts.pending, state => {
        state.isLoading = true;
      })
      .addCase(getAllAdverts.fulfilled, (state, { payload }) => {
        state.adverts = [...state.adverts, ...payload];
        state.total = payload.length;
        state.isLoading = false;
      })
      .addCase(getAllAdverts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      });
  },
});
export const { setResetState, setBrand, setPrice } = advertsSlice.actions;
export const advertsReducer = advertsSlice.reducer;
