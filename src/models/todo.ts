export type receiveTodo = {
  id: number;
  title: string;
  text: string;
  createdAt: string;
  updatedAt: string;
};

export type ApiTodo = {
  id?: number;
  title: string;
  text: string;
  token: string;
};

export type deleteTodoType = {
  id: number;
};
