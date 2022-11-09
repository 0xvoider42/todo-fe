import nookies from "nookies";

import { ApiTodo, receiveTodo } from "../models/todo";
import { getTodos } from "../services/queries/get-todos";
import TodoTable from "../components/UI/TodoTable";

interface Props {
  todos: receiveTodo[];
}

export const getServerSideProps = async (ctx) => {
  const data: ApiTodo[] = await getTodos();

  const cookie = nookies.get(ctx);

  return {
    props: {
      todos: data,
      cookie,
    },
  };
};

const HomePage = ({ todos }: Props) => {
  return <TodoTable todos={todos} />;
};

export default HomePage;
