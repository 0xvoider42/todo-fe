import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../components/features/authentication/userReducer";

export const store = configureStore({
  reducer: {
    user: userSlice,
  },
});
