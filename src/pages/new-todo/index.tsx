import withAuthRedirect from "../../hoc/auth-redirect";
import NewTodo from "../../components/new-todo";

const NewTodoPage = () => {
  return <NewTodo />;
};

export default withAuthRedirect(NewTodoPage);
