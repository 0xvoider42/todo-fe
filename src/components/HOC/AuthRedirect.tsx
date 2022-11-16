import Router from "next/router";

import useUserInfo from "../../hooks/useUserInfo";

const withAuthRedirect = (Component: any) => {
  const route = (props: any) => {
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

  return route;
};

export default withAuthRedirect;
