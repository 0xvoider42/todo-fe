import { api } from "../api";

export const getTodos = async () => {
  const res = await api.get("/todos").then((res) => {
    return res.data;
  });

  return res;
};
