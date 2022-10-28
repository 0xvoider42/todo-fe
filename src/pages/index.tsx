import TodoTable from "../components/UI/TodoTable";
import Todo from "../models/todo";

interface Props {
  props: {
    todos: Todo[];
  };
  revalidate: number;
}

export const getStaticProps: () => Promise<Props> = async () => {
  const response = await fetch("http://localhost:3000/todos");
  const data: Todo[] = await response.json();

  return {
    props: {
      todos: data,
    },
    revalidate: 1,
  };
};

const Home: React.FC<{ todos: Todo[] }> = ({ todos }) => {
  const removeTodo = async (id: number) => {
    const response = await fetch(`http://localhost:3000/todos/${id}`, {
      method: "DELETE",
    });

    return response;
  };

  const removeTodoHandler = (id: number) => {
    return removeTodo(id);
  };

  return <TodoTable todos={todos} onRemoveTodo={removeTodoHandler} />;
};

export default Home;
