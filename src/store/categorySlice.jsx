import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: 1, string: "all" };

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    changeCategory(state, action) {
      state.value = action.payload;
      if (state.value === 1) state.string = "all";
      if (state.value === 2) state.string = "tech";
      if (state.value === 3) state.string = "clothes";
    },
  },
});

export const categoryActions = categorySlice.actions;
export const categoryReducer = categorySlice.reducer;
