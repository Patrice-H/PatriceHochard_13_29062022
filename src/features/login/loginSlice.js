import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: null,
  isUserLogedIn: false,
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    addToken: (state, action) => {
      state.token = action.payload;
    },
    toggleLoginLogout: (state) => {
      state.isUserLogedIn = !state.isUserLogedIn;
    },
  },
});

export const { addToken, toggleLoginLogout } = loginSlice.actions;

export default loginSlice.reducer;
