import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FavoriteState, Products } from "../types/types";

const initialState: FavoriteState = {
  favorites: [],
};

const favoriteSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorite(state, action: PayloadAction<Products>) {
      const findIndex = state.favorites.findIndex(
        (item) => item.id === action.payload.id
      );

      if (findIndex !== -1) {
        state.favorites[findIndex].count++;
      } else {
        state.favorites.push({ ...action.payload, count: 1 });
      }
    },
    deleteToFavorite(state, action: PayloadAction<string | number>) {
      state.favorites = state.favorites.filter(
        (obj) => obj.id !== action.payload
      );
    },
  },
});

export const { addToFavorite, deleteToFavorite } = favoriteSlice.actions;

export default favoriteSlice.reducer;
