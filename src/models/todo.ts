export interface receiveTodo {
  id: number;
  title: string;
  text: string;
  createdAt: string;
  updatedAt: string;
}

export interface Todo {
  id?: number | string;
  title: string;
  text: string;
}
