import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Products, ProductsState } from "../types/types";

export const getProducts = createAsyncThunk<
  Products[],
  undefined,
  { rejectValue: string }
>("products/getProducts", async function (_, { rejectWithValue }) {
  const response = await axios.get<Products[]>(
    "https://ecommerce.icedev.uz/products"
  );
  if (response.status !== 200) {
    return rejectWithValue("error");
  }
  const data = response.data;
  return data;
});

const initialState: ProductsState = {
  products: [],
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.loading = false;
      });
  },
});

export default productSlice.reducer;
