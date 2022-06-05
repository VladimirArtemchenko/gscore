import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SetCurrentSubscribeId } from './action-types';

const currentSubscribeId: number = 0;

const currentProductIdSlice = createSlice({
  name: 'currentSubscribeId',
  initialState: { currentSubscribeId },
  reducers: {
    setCurrentSubscribeId(state, action: PayloadAction<SetCurrentSubscribeId>) {
      state.currentSubscribeId = action.payload.id;
      console.log(state.currentSubscribeId);
    },
  },
});

export const { setCurrentSubscribeId } = currentProductIdSlice.actions;

export default currentProductIdSlice.reducer;
