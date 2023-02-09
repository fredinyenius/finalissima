import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../configs/axiosInstance";

export const fetchReadPoke = createAsyncThunk(
  'poke/fetchReadPoke',
  async (_, { rejectWithValue }) => {
    try {
      const options = {
        method: 'GET',
        url: `/danzas?populate=name,description,image`
      };
      const { data } = await axiosInstance(options);
      console.log(data.data);
      console.log(data.data ?? 'chamchito');
      return data.data ?? [];
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);
