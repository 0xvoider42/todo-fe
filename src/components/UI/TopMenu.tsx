import withConditionalAuth from "../HOC/TodoMenuAuthCheck";
import AuthTodoMenu from "./AuthTodoMenu";
import NonAuthTodoMenu from "./NonAuthTodoMenu";

const TopMenu = () => {
  return withConditionalAuth(AuthTodoMenu, NonAuthTodoMenu)();
};

export default TopMenu;
