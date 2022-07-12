import { createSlice } from '@reduxjs/toolkit';

/**
 * Setting the initial state of the Profile slice
 */
const initialState = {
  firstName: null,
  lastName: null,
  editMode: false,
};

/**
 * Creating a slice of the profile state.
 *
 * @redux
 * @reduxReducer
 */
export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setFirstName: (state, action) => {
      state.firstName = action.payload;
    },
    setLastName: (state, action) => {
      state.lastName = action.payload;
    },
    setEditMode: (state, action) => {
      state.editMode = action.payload;
    },
  },
});

export const { setFirstName, setLastName, setEditMode } = profileSlice.actions;

export default profileSlice.reducer;
