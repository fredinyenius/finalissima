import {createSlice} from "@reduxjs/toolkit";
import {  fetchReadPokeData } from "../thunks/pokeThunk";
const initialState =  {
    loading: false,
    error:{},
    pokeData: [],
    

}; 

export const pokeSlice  = createSlice( {
  name: 'poke',
  initialState,
  reducers: [],
  extraReducers: (builder) => {
    builder.addCase(fetchReadPokeData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchReadPokeData.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.error = {};
      state.pokeData = payload;
    });
    builder.addCase(fetchReadPokeData.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      state.pokeData = [];
    });
}
});

export default pokeSlice.reducer;