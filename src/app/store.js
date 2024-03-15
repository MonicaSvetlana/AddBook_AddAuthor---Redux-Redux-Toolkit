import { configureStore } from "@reduxjs/toolkit";
import bookSlice from "../features/bookSlice";
import authorSlice from "../features/authorSlice";

export const store = configureStore({
  reducer: {
    bookSlice,
    authorSlice,
  },
});
