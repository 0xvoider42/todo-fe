import { AxiosResponse } from "axios";

import { api } from "../api";
import { deleteTodoType } from "../../models/todo";

export const deleteTodo = (
  deleteTodo: deleteTodoType
): Promise<AxiosResponse> => {
  return api.delete(`/todos/${deleteTodo.id}`);
};
