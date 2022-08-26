import { createSlice } from "@reduxjs/toolkit";

const initialState = { items: {}, quantity: 0 };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      state.quantity++;
      if (!state.items[action.payload]) {
        state.items[action.payload] = 1;
      } else {
        state.items[action.payload]++;
      }
    },
    removeFromCart(state, action) {
      state.items[action.payload]--;
      state.quantity--;
      if (state.items[action.payload] === 0) delete state[action.payload];
    },
    // For debugging purposes only
    resetState(state, action) {
      console.log(action);
      state.items = {};
      state.quantity = 0;
    },
  },
});

export const cartActions = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
