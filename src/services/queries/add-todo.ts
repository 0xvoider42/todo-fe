import { AxiosResponse } from "axios";
import Todo from "../../models/todo";
import { api } from "../api";

export const addTodo = (todoData: Todo): Promise<AxiosResponse<Todo>> => {
  const response = api.post("/todos", {
    title: todoData.title,
    text: todoData.text,
  });

  return response;
};
