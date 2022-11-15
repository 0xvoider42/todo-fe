import Router from "next/router";
import useUserInfo from "../../hooks/useUserInfo";

const withAuthRedirect = (Component) => {
  const route = (props) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { isLoggedIn } = useUserInfo();

    if (isLoggedIn) {
      return <Component {...props} />;
    }

    typeof window !== "undefined" && Router.push("/auth");

    return <Component {...props} />;
  };

  return route;
};

export default withAuthRedirect;
