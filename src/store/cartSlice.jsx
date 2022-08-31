import { createSlice } from "@reduxjs/toolkit";

const initialState = { items: {}, quantity: 0 };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      state.quantity++;
      const product = action.payload[0];
      const attribute1 = action.payload[1];
      const attribute2 = action.payload[2];
      const attribute3 = action.payload[3];
      const productKey = `${product.id}-${attribute1}-${attribute2}-${attribute3}`;
      if (!state.items[productKey]) {
        state.items[productKey] = { product, quantity: 1 };
      } else {
        state.items[productKey].quantity++;
      }
    },
    removeFromCart(state, action) {
      const product = action.payload[0];
      const attribute1 = action.payload[1];
      const attribute2 = action.payload[2];
      const attribute3 = action.payload[3];
      const productKey = `${product.id}-${attribute1}-${attribute2}-${attribute3}`;
      state.items[productKey].quantity--;
      state.quantity--;
      if (state.items[productKey] === 0) delete state[productKey];
    },
    // For debugging purposes only
    resetState(state) {
      state.items = {};
      state.quantity = 0;
    },
  },
});

export const cartActions = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
