import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  firstName: null,
  lastName: null,
  editMode: false,
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
    setEditMode: (state, action) => {
      state.editMode = action.payload;
    },
  },
});

export const { getFirstName, getLastName, setEditMode } = profileSlice.actions;

export default profileSlice.reducer;
