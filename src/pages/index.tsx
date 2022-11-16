import { ApiTodo, ReceiveTodo } from "../models/todo";
import { getTodos } from "../services/queries/get-todos";
import withAuthRedirect from "../hoc/auth-redirect";
import TodoTable from "../components/todo-table";

interface Props {
  todos: ReceiveTodo[];
}

export const getServerSideProps = async (ctx) => {
  const data: ApiTodo[] = await getTodos();

  return {
    props: {
      todos: data,
    },
  };
};

const HomePage = ({ todos }: Props) => {
  return <TodoTable todos={todos} />;
};

export default withAuthRedirect(HomePage);
