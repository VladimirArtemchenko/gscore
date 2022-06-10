import { combineReducers } from '@reduxjs/toolkit';
import productsList from './store/prices/reducer';
import verificationMenu from './store/verificationMenu/reducer';
import token from './store/token/reducer';
import currentProductId from './store/currentProductId/reducer';
import subscriptionsList from './store/subscriptions/reducer';
import currentSubscribeId from './store/currentSubscribeId/reducer';
import isUpdateMode from './store/isUpdateMode/reducer';
import currentProductIndex from './store/currentProductIndex/reducer';
import codesIds from './store/activeCodesIds/reducer';

const rootReducer = combineReducers({
  productsList,
  verificationMenu,
  token,
  currentProductId,
  subscriptionsList,
  currentSubscribeId,
  isUpdateMode,
  currentProductIndex,
  codesIds,
});
export default rootReducer;
