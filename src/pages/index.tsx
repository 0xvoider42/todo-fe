import { ApiTodo, ReceiveTodo } from "../models/todo";
import { getTodos } from "../services/queries/get-todos";
import TodoTable from "../components/UI/TodoTable";

interface Props {
  todos: ReceiveTodo[];
}

export const getServerSideProps = async () => {
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

export default HomePage;
