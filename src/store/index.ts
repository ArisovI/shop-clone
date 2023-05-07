import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";
import cartReducer from "./cartSlice";
import favoriteReducer from "./favoriteSlice";
const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
    favorite: favoriteReducer,
  },
});
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
