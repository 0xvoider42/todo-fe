import { createSlice } from "@reduxjs/toolkit";

import { userSignIn, userSignUp } from "./userAction";

let userToken: string;

if (typeof window !== "undefined") {
  userToken = localStorage.getItem("token");
}

const initialState = {
  loading: false,
  userInfo: {},
  userToken,
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
        console.log(action);
        // initialState.userToken = action.payload.data;
      })
      .addCase(userSignIn.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(userSignUp.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(userSignUp.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(userSignUp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default userSlice.reducer;
