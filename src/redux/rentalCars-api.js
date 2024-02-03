// //65bb657e52189914b5bbfb17.mockapi.io/api/
// brands
// adverts

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://65bb657e52189914b5bbfb17.mockapi.io/api';

// url.searchParams.append('page', 1);
// url.searchParams.append('limit', 8);

export const getBrands = async () => {
  try {
    const { data } = await axios.get(`/brands`);
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const getAllAdverts = createAsyncThunk(
  'adverts/getAdverts',
  async ({ limit = 8, page, make = '' }, thunkAPI) => {
    try {
      const { data } = await axios.get(`/adverts`, {
        params: { limit, page, make },
      });
      console.log(data);
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
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const getAdvertsByFilters = createAsyncThunk(
  'adverts/getAdverts',
  async ({ brand }, thunkAPI) => {
    try {
      console.log(brand);
      const { data } = await axios.get(`/adverts`, {
        params: { make: brand },
      });
      console.log(data);
      return data;
    } catch (error) {
      console.log(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
