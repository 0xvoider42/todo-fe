import { api } from "../api";
import { SignUpInitials } from "../../models/auth";

export const signUp = (initials: SignUpInitials) => {
  return api.post("/authentication/signup", {
    email: initials.email,
    password: initials.password,
  });
};
