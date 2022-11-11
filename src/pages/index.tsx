import { ApiTodo, ReceiveTodo } from "../models/todo";
import { checkTokenValidity } from "../components/features/tokenValidityCheck";
import { getTodos } from "../services/queries/get-todos";
import SignIn from "../components/Authentication/SignIn";
import SignUp from "../components/Authentication/SignUp";
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
  return (
    <>
      {checkTokenValidity(token) ? (
        <>
          <SignIn openSignInModal={false} setOpenSignInModal={true} />
          <SignUp openSignUpModal={false} setOpenSignUpModal={true} />
          <TodoTable todos={todos} token={token} />
        </>
      ) : (
        <TodoTable todos={todos} token={token} />
      )}
    </>
  );
};

export default HomePage;
