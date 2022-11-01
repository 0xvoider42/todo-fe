import { AxiosResponse } from "axios";
import { Todo } from "../../models/todo";
import { api } from "../api";

export const editTodo = (updateTodo: Todo): Promise<AxiosResponse<Todo>> => {
  const { id, title, text } = updateTodo;
  return api.patch(`/todos/${id}`, { title, text });
};
