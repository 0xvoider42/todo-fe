import { api } from "../api";
import { signUpInitials } from "../../models/auth";

export const signUp = (initials: signUpInitials) => {
  return api.post("/authentication/signup", {
    email: initials.email,
    password: initials.password,
  });
};
