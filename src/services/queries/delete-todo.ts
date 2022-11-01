import { AxiosResponse } from "axios";
import { api } from "../api";

export const deleteTodo = (id: number): Promise<AxiosResponse> => {
  const response = api.delete(`/todos/${id}`);

  return response;
};
