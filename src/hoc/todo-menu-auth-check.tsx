import useUserInfo from "../hooks/user-info";
import NonAuthTodoMenu from "../components/todo-menu/non-auth-menu";

const withConditionalAuth = (Component) => {
  const route = (props) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { isLoggedIn } = useUserInfo();

    if (isLoggedIn) {
      return <Component {...props} />;
    }

    return <NonAuthTodoMenu {...props} />;
  };

  return route;
};

export default withConditionalAuth;
