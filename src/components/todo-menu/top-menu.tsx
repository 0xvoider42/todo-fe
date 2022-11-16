import withConditionalAuth from "../../hoc/todo-menu-auth-check";
import AuthTodoMenu from "./auth-menu";

const TopMenu = () => {
  return <AuthTodoMenu />;
};

export default withConditionalAuth(TopMenu);
