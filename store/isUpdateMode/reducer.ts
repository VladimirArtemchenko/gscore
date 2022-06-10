import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SetIsUpdateMode } from './action-types';

const isUpdateMode: boolean = false;

const isUpdateModeSlice = createSlice({
  name: 'isUpdateMode',
  initialState: { isUpdateMode },
  reducers: {
    toggleIsUpdateMode(state, action: PayloadAction<SetIsUpdateMode>) {
      state.isUpdateMode = action.payload.isUpdateMode;
    },
  },
});

export const { toggleIsUpdateMode } = isUpdateModeSlice.actions;

export default isUpdateModeSlice.reducer;
