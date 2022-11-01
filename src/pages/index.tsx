import { getTodos } from "../services/queries/get-todos";
import { ApiTodo, receiveTodo } from "../models/todo";
import TodoTable from "../components/UI/TodoTable";

interface Props {
  todos: receiveTodo[];
}

export const getServerSideProps = async () => {
  const data: ApiTodo[] = await getTodos();

  return {
    props: {
      todos: data,
    },
  };
};

const Home = ({ todos }: Props) => {
  return <TodoTable todos={todos} />;
};

export default Home;
