import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../components/features/authentication/userReducer";

export type AppDispatch = typeof store.dispatch;

export const store = configureStore({
  reducer: {
    user: userSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
