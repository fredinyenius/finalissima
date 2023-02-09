import {createSlice} from "@reduxjs/toolkit";

const initialState =  {
    loading: false,
    error:{},
    poke: []

}; 

export const pokeSlice  = createSlice( {
  name: 'home',
  initialState,
  reducers: [],
  
});

export default pokeSlice.reducer;