import { AxiosResponse } from "axios";
import { api } from "../api";

export const deleteTodo = (id: number): Promise<AxiosResponse> => {
  return api.delete(`/todos/${id}`);
};
