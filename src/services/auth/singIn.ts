import { api } from "../api";
import { SignInInitials } from "../../models/auth";

export const signIn = (initials: SignInInitials) => {
  return api.post("/authentication/signin", {
    email: initials.email,
    password: initials.password,
  });
};
