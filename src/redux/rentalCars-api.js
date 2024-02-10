import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://65bb657e52189914b5bbfb17.mockapi.io/api';

export const getBrands = async () => {
  try {
    const { data } = await axios.get(`/brands`);

    return data;
  } catch (error) {
    console.log(error);
  }
};
export const getAllAdverts = createAsyncThunk(
  'adverts/getAdverts',
  async ({ limit = 8, page, brand, rentalPrice }, thunkAPI) => {
    try {
      const { data } = await axios.get(`/adverts`, {
        params: { limit, page, make: brand, rentalPrice: rentalPrice },
      });

      return data;
    } catch (error) {
      console.log(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const getAdvertById = async id => {
  try {
    const { data } = await axios.get(`/adverts`, {
      params: {
        id: id,
      },
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};
