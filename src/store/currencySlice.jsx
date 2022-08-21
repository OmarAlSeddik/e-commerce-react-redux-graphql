import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: 2, symbol: "€" };

const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    changeCurrency(state, action) {
      state.value = action.payload;
      if (state.value === 1) state.symbol = "$";
      if (state.value === 2) state.symbol = "€";
      if (state.value === 3) state.symbol = "¥";
    },
  },
});

export const currencyActions = currencySlice.actions;
export const currencyReducer = currencySlice.reducer;
