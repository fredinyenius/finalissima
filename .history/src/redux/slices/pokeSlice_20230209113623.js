import {createSlice} from "@reduxjs/toolkit";
import {  fetchReadPoke } from "../thunks/pokeThunk";
const initialState =  {
    loading: false,
    error:{},
    poke: [],
    

}; 

export const pokeSlice  = createSlice( {
  name: 'home',
  initialState,
  reducers: [],
  extraReducers: (builder) => {
    builder.addCase(fetchReadPoke.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchReadPoke.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.error = {};
      state.poke = payload;
    });
    builder.addCase(fetchReadPoke.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      state.poke = [];
    });
}
});

export default pokeSlice.reducer;