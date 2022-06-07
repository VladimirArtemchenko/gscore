import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SetCurrentProductIndex } from './action-types';

const currentProductIndex: number = 0;

const currentProductIndexSlice = createSlice({
  name: 'currentProductIndex',
  initialState: { currentProductIndex },
  reducers: {
    setCurrentProductIndex(state, action: PayloadAction<SetCurrentProductIndex>) {
      state.currentProductIndex = action.payload.index;
    },
  },
});

export const { setCurrentProductIndex } = currentProductIndexSlice.actions;

export default currentProductIndexSlice.reducer;
