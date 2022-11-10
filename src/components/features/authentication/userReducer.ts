import { createSlice } from "@reduxjs/toolkit";
import { deleteCookie, setCookie } from "cookies-next";

import { userSignIn, userSignUp } from "./userAction";

const initialState = {
  loading: false,
  userInfo: {
    user: null,
  },
  userToken: "",
  error: null,
  success: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(userSignIn.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(userSignIn.fulfilled, (state, action) => {
        state.success = true;
        state.userInfo.user = action.payload.data.email;
        state.userToken = action.payload.data.token.access_token;
        setCookie("token", action.payload.data.token.access_token);
      })
      .addCase(userSignIn.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(userSignUp.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(userSignUp.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(userSignUp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        deleteCookie("token");
      });
  },
});

export default userSlice.reducer;
