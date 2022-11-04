import { signInInitials } from "../../models/auth";
import { api } from "../api";

export const signIn = (initials: signInInitials) => {
  return api.post("/authentication/signin", {
    email: initials.email,
    password: initials.password,
  });
};
