import withConditionalAuth from "../HOC/TodoMenuAuthCheck";
import AuthTodoMenu from "./AuthTodoMenu";
import NonAuthTodoMenu from "./NonAuthTodoMenu";

const TopMenu = ({ token }) => {
  return withConditionalAuth(AuthTodoMenu, NonAuthTodoMenu, token);
};

export default TopMenu;
