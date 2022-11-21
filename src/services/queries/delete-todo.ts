import { AxiosResponse } from "axios";

import { api } from "../api";
import { DeleteTodoType } from "../../models/todo";

export const deleteTodo = (
  deleteTodo: DeleteTodoType
): Promise<AxiosResponse> => {
  return api.delete(`/todos/${deleteTodo.id}`);
};
