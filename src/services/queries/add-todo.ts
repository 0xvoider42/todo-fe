import { AxiosResponse } from "axios";

import { api } from "../api";
import { ApiTodo } from "../../models/todo";

export const addTodo = (todoData: ApiTodo): Promise<AxiosResponse<ApiTodo>> => {
  return api.post("/todos", {
    title: todoData.title,
    text: todoData.text,
  });
};
