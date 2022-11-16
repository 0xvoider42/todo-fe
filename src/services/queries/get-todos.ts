import { api } from "../api";

export const getTodos = () => {
  const res = api.get("/todos").then((res) => {
    return res.data;
  });

  return res;
};
