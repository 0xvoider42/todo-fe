import { ApiTodo, ReceiveTodo } from "../models/todo";
import { getTodos } from "../services/queries/get-todos";
import withAuthRedirect from "../components/HOC/AuthRedirect";

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
  return withAuthRedirect({ todos });
};

export default HomePage;
