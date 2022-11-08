import { AxiosResponse } from "axios";
import { deleteTodoType } from "../../models/todo";

import { api } from "../api";

export const deleteTodo = (
  deleteTodo: deleteTodoType
): Promise<AxiosResponse> => {
  return api.delete(`/todos/${deleteTodo.id}`, {
    headers: { Authorization: `Bearer ${deleteTodo.token}` },
  });
};
