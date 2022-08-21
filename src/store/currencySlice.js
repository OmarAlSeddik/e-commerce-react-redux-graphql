import { createSlice } from "@reduxjs/toolkit";

const initialState = { currency: "$" };

const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    changeCurrency(state, action) {
      state.currency = action.payload;
    },
  },
});

export const currencyActions = currencySlice.actions;
export const currencyReducer = currencySlice.reducer;
