export interface receiveTodo {
  id: number;
  title: string;
  text: string;
  createdAt: string;
  updatedAt: string;
}

export interface ApiTodo {
  id?: number | string;
  title: string;
  text: string;
}
