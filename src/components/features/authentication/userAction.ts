import { createAsyncThunk } from "@reduxjs/toolkit";

import { signInInitials, signUpInitials } from "../../../models/auth";
import { signUp } from "../../../services/auth/signUp";
import { signIn } from "../../../services/auth/singIn";

export const userSignUp = createAsyncThunk(
  "user/signup",
  async (userInitials: signUpInitials, { rejectWithValue }) => {
    try {
      const response = await signUp(userInitials);
      return response;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue(error.message);
    }
  }
);

export const userSignIn = createAsyncThunk(
  "user/signin",
  async (userInitials: signInInitials, { rejectWithValue }) => {
    try {
      const response = await signIn(userInitials);
      return response;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue(error.message);
    }
  }
);
