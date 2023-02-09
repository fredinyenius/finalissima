import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../configs/axiosInstance";

export const fetchReadPokeData = createAsyncThunk(
  'poke/fetchReadPokeData',
  async (_, { rejectWithValue }) => {
    try {
      const options = {
        method: 'GET',
        url: `/productos?filters[posicion][slug][$eq]=cabecera&populate=subcategoria,marca,imagen`
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
