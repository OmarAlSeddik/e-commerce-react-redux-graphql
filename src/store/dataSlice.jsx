import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getData = createAsyncThunk("data/getData", async (_, thunkAPI) => {
  try {
    const res = await fetch("https://rickandmortyapi.com/api");
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
});

const initialState = { value: null };

const dataSlice = createSlice({
  name: "data",
  initialState,
  extraReducers: {
    [getData.pending]: (state, action) => {
      console.log(action);
    },
    [getData.fulfilled]: (state, action) => {
      console.log(action);
    },
    [getData.rejected]: (state, action) => {
      console.log(action);
    },
  },
});

export const dataActions = dataSlice.actions;
export const dataReducer = dataSlice.reducer;
