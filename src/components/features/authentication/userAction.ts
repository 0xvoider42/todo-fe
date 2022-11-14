import { createAsyncThunk } from "@reduxjs/toolkit";

import { SignInInitials, SignUpInitials } from "../../../models/auth";
import { SignInBody, SignUpBody } from "../../../services/api/api.type";
import { signUp } from "../../../services/auth/signUp";
import { signIn } from "../../../services/auth/singIn";

export const userSignUp = createAsyncThunk(
  "user/signup",
  async (userInitials: SignUpInitials, { rejectWithValue }) => {
    try {
      const response = await signUp(userInitials);
      return response.data as SignUpBody;
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
  async (userInitials: SignInInitials, { rejectWithValue }) => {
    try {
      const response = await signIn(userInitials);
      return response.data as SignInBody;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue(error.message);
    }
  }
);
