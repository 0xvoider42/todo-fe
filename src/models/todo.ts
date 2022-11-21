export interface ReceiveTodo {
  id: number;
  title: string;
  text: string;
  createdAt: string;
  updatedAt: string;
}

export interface ApiTodo {
  id?: number;
  title: string;
  text: string;
  token: string;
}

export interface DeleteTodoType {
  id: number;
}
