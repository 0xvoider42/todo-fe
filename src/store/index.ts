import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./authentication/user-reducer";

export type AppDispatch = typeof store.dispatch;

export const store = configureStore({
  reducer: {
    user: userSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
