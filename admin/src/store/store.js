import { configureStore } from "@reduxjs/toolkit";
import { adminSlice } from "../reducers/adminSlicer";

export default configureStore({
  reducer: {
    admin: adminSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
});
