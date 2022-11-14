import useUserInfo from "../../hooks/useUserInfo";

const withConditionalAuth = (Auth, NonAuth) => {
  const route = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { isLoggedIn } = useUserInfo();

    if (isLoggedIn) {
      return <Auth />;
    }

    return <NonAuth />;
  };

  return route;
};

export default withConditionalAuth;
