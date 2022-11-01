import { instance } from "../../config";
import Todo from "../models/todo";
import TodoTable from "../components/UI/TodoTable";

interface Props {
  props: {
    todos: Todo[];
  };
}

export const getServerSideProps: () => Promise<Props> = async () => {
  const response = instance.get("/todos").then((res) => {
    return res.data;
  });
  const data: Todo[] = await response;

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
