import { createAsyncThunk } from "@reduxjs/toolkit";

import { signIn } from "../../services/auth/sign-in";
import { SignInBody, SignUpBody } from "../../services/api/api.type";
import { SignInInitials, SignUpInitials } from "../../models/auth";
import { signUp } from "../../services/auth/sign-up";

export const userSignUp = createAsyncThunk(
  "user/signup",
  async (userInitials: SignUpInitials, { rejectWithValue }) => {
    try {
      const response = await signUp(userInitials);
      return response.data as SignUpBody;
    } catch (error) {
      if (error.response?.data?.message) {
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue(error.message);
    }
  }
);

export const userSignIn = createAsyncThunk(
  "user/signin",
  async (userInitials: SignInInitials, { rejectWithValue }) => {
    try {
      const response = await signIn(userInitials);
      return response.data as SignInBody;
    } catch (error) {
      if (error.response?.data?.message) {
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue(error.message);
    }
  }
);
