import { AxiosResponse } from "axios";

import { api } from "../api";
import { ApiTodo } from "../../models/todo";

export const editTodo = (
  updateTodo: ApiTodo
): Promise<AxiosResponse<ApiTodo>> => {
  const { id, title, text, token } = updateTodo;
  return api.patch(
    `/todos/${id}`,
    { title, text },
    { headers: { Authorization: `Bearer ${token}` } }
  );
};
