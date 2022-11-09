import { api } from "../api";
import { signInInitials } from "../../models/auth";

export const signIn = (initials: signInInitials) => {
  return api.post("/authentication/signin", {
    email: initials.email,
    password: initials.password,
  });
};
