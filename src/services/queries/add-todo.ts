import { AxiosResponse } from "axios";
import { Todo } from "../../models/todo";
import { api } from "../api";

export const addTodo = (todoData: Todo): Promise<AxiosResponse<Todo>> => {
  return api.post("/todos", {
    title: todoData.title,
    text: todoData.text,
  });
};
