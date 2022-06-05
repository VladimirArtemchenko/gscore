import { createSlice } from '@reduxjs/toolkit';

import { VerificationMenuType } from './types';

const verificationMenu: VerificationMenuType[] = [
  {
    link: '/verification', label: 'Create account',
  },
  {
    link: '/verification/login', label: 'Log in',
  },
  {
    link: '/verification/checkout', label: 'Checkout',
  },
];

const verificationMenuSlice = createSlice({
  name: 'verificationMenu',
  initialState: { verificationMenu },
  reducers: {},

});

export default verificationMenuSlice.reducer;
