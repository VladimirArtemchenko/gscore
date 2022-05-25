import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductsListType } from './types';
import { GetProducts } from './action-types';

const productsList: ProductsListType[] = [];

const productsListSlice = createSlice({
  name: 'productsList',
  initialState: { productsList },
  reducers: {
    getProducts(state, action: PayloadAction<GetProducts>) {
      state.productsList = action.payload.data.data;
    },
  },
});

export const { getProducts } = productsListSlice.actions;

export default productsListSlice.reducer;
