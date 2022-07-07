import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  firstName: null,
  lastName: null,
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    getFirstName: (state, action) => {
      state.firstName = action.payload;
    },
    getLastName: (state, action) => {
      state.lastName = action.payload;
    },
  },
});

export const { getFirstName, getLastName } = profileSlice.actions;

export default profileSlice.reducer;
