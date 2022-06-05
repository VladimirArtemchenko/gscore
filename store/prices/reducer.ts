import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductsListType } from './types';
import { GetProducts } from './action-types';

const productsList: ProductsListType[] = [{
  id: 0,
  name: '',
  prices: [{
    id: 0,
    isActive: false,
    price: '',
    productId: 0,
    sitesCount: 0,
  }],
  sitesCount: 0,
}];

const productsListSlice = createSlice({
  name: 'productsList',
  initialState: { productsList },
  reducers: {
    getProducts(state, action: PayloadAction<GetProducts>) {
      state.productsList = action.payload;
    },
  },
});

export const { getProducts } = productsListSlice.actions;

export default productsListSlice.reducer;
