import { signUpInitials } from "../../models/auth";
import { api } from "../api";

export const signUp = (initials: signUpInitials) => {
  return api.post("/authentication/signup", {
    email: initials.email,
    password: initials.password,
  });
};
