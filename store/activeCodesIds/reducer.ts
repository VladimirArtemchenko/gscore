import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SetCode, DeleteCode } from './action-types';

const codesIds: number [] = [];

const codesIdsSlice = createSlice({
  name: 'codesIds',
  initialState: { codesIds },
  reducers: {
    setCodeId(state, action: PayloadAction<SetCode>) {
      state.codesIds.push(action.payload.id);
      console.log(state.codesIds);
    },
    clearCodesIds(state) {
      state.codesIds = [];
      console.log(state.codesIds);
    },
    deleteCodeId(state, action: PayloadAction<DeleteCode>) {
      state.codesIds = state.codesIds.filter((id) => id !== action.payload.id);
      console.log(state.codesIds);
    },
  },
});

export const { setCodeId, deleteCodeId, clearCodesIds } = codesIdsSlice.actions;

export default codesIdsSlice.reducer;
