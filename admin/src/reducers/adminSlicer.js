import { createSlice } from "@reduxjs/toolkit";

export const adminSlice = createSlice({
  name: "admin",
  initialState: {
    isAuthenticated: false,
    userDetails: {
      userName: null,
      name: null,
      role: null,
    },
  },
  reducers: {
    updateUserDetails: (state, action) => {
      state.isAuthenticated = action.payload.isAuthenticated;
      state.userDetails = action.payload.userDetails;
    },
  },
});

export const { updateUserDetails } = adminSlice.actions;
