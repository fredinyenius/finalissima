import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../configs/axiosInstance";

export const fetchReadPoke = createAsyncThunk(
  'poke/fetchReadPoke',
  async (_, { rejectWithValue }) => {
    try {
      const options = {
        method: 'GET',
        url: `//pokeapi.co/api/v2/pokemon/150`
      };
      const { data } = await axiosInstance(options);
      return data.data ?? [];
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);