import { api } from "../api";

export const getTodos = () => {
  const response = api.get("/todos").then((res) => {
    return res.data;
  });

  return response;
};
