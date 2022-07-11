import { createSlice } from '@reduxjs/toolkit';

let token;
let isUserLogedIn;

if (localStorage.getItem('tokenStored') === null) {
  token = null;
  isUserLogedIn = false;
} else {
  token = localStorage.getItem('tokenStored');
  isUserLogedIn = true;
}

const initialState = {
  token: token,
  isUserLogedIn: isUserLogedIn,
  errorLogin: null,
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setToken: (state, action) => {
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

export const { setToken, toggleLoginLogout, manageErrorLogin } =
  loginSlice.actions;

export default loginSlice.reducer;
