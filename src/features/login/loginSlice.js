import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: null,
  isUserLogedIn: false,
  errorLogin: null,
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
    manageErrorLogin: (state, action) => {
      state.errorLogin = action.payload;
    },
  },
});

export const { addToken, toggleLoginLogout, manageErrorLogin } =
  loginSlice.actions;

export default loginSlice.reducer;
