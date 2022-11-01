import { Todo, receiveTodo } from "../models/todo";
import TodoTable from "../components/UI/TodoTable";
import { getTodos } from "../services/queries/get-todos";

interface Props {
  todos: receiveTodo[];
}

export const getServerSideProps = async () => {
  const data: Todo[] = await getTodos();

  return {
    props: {
      todos: data,
    },
  };
};

// todos is not accessible in Props, should I create a separate type/interface for this case?
const Home = ({ todos }: Props) => {
  return <TodoTable todos={todos} />;
};

export default Home;
