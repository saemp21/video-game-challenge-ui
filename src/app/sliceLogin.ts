import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  perico: 0,
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    increment: (state) => {
      state.perico += 1;
    },
    setNumber: (state, action) => {
      state.perico = action.payload;
    },
  },
});

export const { increment, setNumber } = loginSlice.actions;
