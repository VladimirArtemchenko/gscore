import { combineReducers } from '@reduxjs/toolkit';
import productsList from './store/prices/reducer';

const rootReducer = combineReducers({
  productsList,
});
export default rootReducer;
