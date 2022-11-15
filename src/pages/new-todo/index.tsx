import withAuthRedirect from "../../components/HOC/AuthRedirect";
import NewTodo from "../../components/NewTodo/NewTodo";

const NewTodoPage = () => {
  return <NewTodo />;
};

export default withAuthRedirect(NewTodoPage);
