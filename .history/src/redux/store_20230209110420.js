import { configureStore } from '@reduxjs/toolkit';
import pokeReducer from "./slices/pokeSlice"

export const store = configureStore({
  reducer: {
    poke: pokeReducer
  },

});