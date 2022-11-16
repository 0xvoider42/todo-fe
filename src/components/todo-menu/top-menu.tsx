import useUserInfo from "../../hooks/user-info";
import AuthTodoMenu from "./auth-menu";
import NonAuthTodoMenu from "./non-auth-menu";

const TopMenu = () => {
  const { isLoggedIn } = useUserInfo();

  if (isLoggedIn) {
    return <AuthTodoMenu />;
  }
  return <NonAuthTodoMenu />;
};

export default TopMenu;
