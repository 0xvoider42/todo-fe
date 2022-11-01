import Todo from "../models/todo";
import TodoTable from "../components/UI/TodoTable";
import { getTodos } from "../services/queries/get-todos";

interface Props {
  props: {
    todos: Todo[];
  };
}

export const getServerSideProps: () => Promise<Props> = async () => {
  const data: Todo[] = await getTodos();

  return {
    props: {
      todos: data,
    },
  };
};

// todos is not accessible in Props, should I create a separate type/interface for this case?
const Home = ({ todos }) => {
  return <TodoTable todos={todos} />;
};

export default Home;
