import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SetToken, SetUserInfo } from './action-types';
import { UserInfoType } from './types';

const userInfo: UserInfoType = { token: '', user: { id: null, email: '', username: '' } };

const tokenSlice = createSlice({
  name: 'userInfo',
  initialState: { userInfo },
  reducers: {
    setToken(state, action: PayloadAction<SetToken>) {
      state.userInfo = action.payload;
    },
    setUserInfo(state, action: PayloadAction<SetUserInfo>) {
      if (state.userInfo.user.id === action.payload.id) {
        state.userInfo.user.email = action.payload.email;
        state.userInfo.user.username = action.payload.username;
      }
    },
    logout(state) {
      state.userInfo = { token: '', user: { id: null, email: '', username: '' } };
    },
  },
});

export const {
  setToken, logout, setUserInfo,
} = tokenSlice.actions;

export default tokenSlice.reducer;
