import TodoTable from "../components/UI/TodoTable";
import Todo from "../models/todo";

interface Props {
  props: {
    todos: Todo[];
  };
}

export const getServerSideProps: () => Promise<Props> = async () => {
  const response = await fetch("http://localhost:3000/todos");
  const data: Todo[] = await response.json();

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
