import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SetIsLogine } from './action-types';

const isLogine: boolean = false;

const isLogineSlice = createSlice({
  name: 'isLogine',
  initialState: { isLogine },
  reducers: {
    setIsLogine(state, action: PayloadAction<SetIsLogine>) {
      state.isLogine = true;
    },
  },
});

export const { setIsLogine } = isLogineSlice.actions;

export default isLogineSlice.reducer;
