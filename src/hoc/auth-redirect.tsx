import Router from "next/router";

import useUserInfo from "../hooks/user-info";

const withAuthRedirect = (Component: any) => {
  const Route = (props: any) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { isLoggedIn } = useUserInfo();

    if (isLoggedIn) {
      return <Component {...props} />;
    }

    if (typeof window !== "undefined") {
      Router.push("/auth");
    }

    return null;
  };

  return Route;
};

export default withAuthRedirect;
