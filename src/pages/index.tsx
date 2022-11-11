import { ApiTodo, ReceiveTodo } from "../models/todo";
import { getTodos } from "../services/queries/get-todos";
import TodoTable from "../components/UI/TodoTable";

interface Props {
  todos: ReceiveTodo[];
  token: string;
}

export const getServerSideProps = async (ctx) => {
  const data: ApiTodo[] = await getTodos();

  const token = ctx.req.headers.cookie.split("token=", 2)[1];

  if (!token) {
    return {
      props: {
        todos: data,
      },
    };
  }
  return {
    props: {
      todos: data,
      token,
    },
  };
};

const HomePage = ({ todos, token }: Props) => {
  return <TodoTable todos={todos} token={token} />;
};

export default HomePage;
