import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { count } from "console";
import { CartState, Products } from "../types/types";

const initialState: CartState = {
  carts: [],
};

const cartSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<Products>) {
      const findIndex = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );

      if (findIndex !== -1) {
        state.carts[findIndex].count++;
      } else {
        state.carts.push({ ...action.payload, count: 1 });
      }
    },
    deleteToCart(state, action: PayloadAction<string | number>) {
      state.carts = state.carts.filter((obj) => obj.id !== action.payload);
    },
    decrementToCart(state, action: PayloadAction<string | number>) {
      state.carts = state.carts.map((obj) => {
        if (obj.id === action.payload) {
          if (obj.count > 1) {
            obj.count--;
          }
        }
        return obj;
      });
    },
  },
});

export const { addToCart, deleteToCart, decrementToCart } = cartSlice.actions;

export default cartSlice.reducer;
