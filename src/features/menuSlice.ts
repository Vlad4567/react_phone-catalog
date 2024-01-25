/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  shown: false,
};

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    toggle: (state) => {
      state.shown = !state.shown;
    },
  },
});

export const { toggle } = menuSlice.actions;
export default menuSlice.reducer;
