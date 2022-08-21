import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: "€" };

const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    changeCurrency(state, action) {
      state.value = action.payload;
    },
  },
});

export const currencyActions = currencySlice.actions;
export const currencyReducer = currencySlice.reducer;
