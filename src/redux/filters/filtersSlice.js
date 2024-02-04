import { createSlice } from '@reduxjs/toolkit';
import { getAdvertsByFilters } from '../rentalCars-api';
const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    brand: '',
    price: '',
    filteredAdverts: [],
    total: 0,
    isShowModal: false,
    isLoading: false,
    isError: null,
  },
  reducers: {
    setBrand(state, { payload }) {
      state.brand = payload;
    },
    setPrice(state, { payload }) {
      state.price = payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getAdvertsByFilters.pending, state => {
        state.isLoading = true;
      })
      .addCase(getAdvertsByFilters.fulfilled, (state, { payload }) => {
        state.filteredAdverts = payload;
        state.total = payload.length;
        state.isLoading = false;
      })
      .addCase(getAdvertsByFilters.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      });
  },
});
export const { setBrand, setPrice } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
