import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: 0 };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
});

export const cartActions = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
