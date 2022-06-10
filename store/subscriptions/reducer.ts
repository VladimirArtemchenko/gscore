import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SubscriptionsListType } from './types';
import { GetSubscriptions, ActivateCode, ManageCode } from './action-types';

const subscriptionsList: SubscriptionsListType[] = [];

const productsListSlice = createSlice({
  name: 'subscriptionsList',
  initialState: { subscriptionsList },
  reducers: {
    getSubscriptions(state, action: PayloadAction<GetSubscriptions>) {
      state.subscriptionsList = action.payload;
    },
    activateCode(state, action: PayloadAction<ActivateCode>) {
      state.subscriptionsList.forEach((subscribe) => {
        subscribe.codes.forEach((code) => {
          if (code.id === action.payload.id) {
            code.status = action.payload.status;
            code.code = action.payload.code;
            code.origin = action.payload.origin;
          }
        });
      });
    },
    manageCode(state, action: PayloadAction<ManageCode>) {
      state.subscriptionsList.forEach((subscribe) => {
        subscribe.codes = action.payload.codes;
      });
    },
  },
});

export const { getSubscriptions, activateCode, manageCode } = productsListSlice.actions;

export default productsListSlice.reducer;
