import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { deleteCookie, setCookie } from "cookies-next";

import { api } from "../../services/api";
import { userSignIn, userSignUp } from "./user-action";

const initialState = {
  loading: false,
  userInfo: {
    user: null,
  },
  error: null,
  success: false,
  userToken: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserToken(state, action: PayloadAction<string>) {
      state.userToken = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userSignIn.pending, (state) => {
        state.loading = true;
        state.error = false;
      })

      .addCase(userSignIn.fulfilled, (state, action) => {
        state.success = true;
        state.userInfo.user = action.payload.email;
        state.userToken = action.payload.token.access_token;
        setCookie("token", action.payload.token.access_token);
        api.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${state.userToken}`;
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

export const { setUserToken } = userSlice.actions;
export default userSlice.reducer;
