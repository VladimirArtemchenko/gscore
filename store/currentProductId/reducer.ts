import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SetCurrentProductId } from './action-types';

const currentProductId: number = 0;

const currentProductIdSlice = createSlice({
  name: 'currentProductId',
  initialState: { currentProductId },
  reducers: {
    setCurrentProductId(state, action: PayloadAction<SetCurrentProductId>) {
      console.log(action.payload.id);
      state.currentProductId = action.payload.id;
    },
  },
});

export const { setCurrentProductId } = currentProductIdSlice.actions;

export default currentProductIdSlice.reducer;
