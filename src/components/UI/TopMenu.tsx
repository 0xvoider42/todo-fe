import withConditionalAuth from "../HOC/TodoMenuAuthCheck";
import AuthTodoMenu from "./AuthTodoMenu";

const TopMenu = () => {
  return <AuthTodoMenu />;
};

export default withConditionalAuth(TopMenu);
