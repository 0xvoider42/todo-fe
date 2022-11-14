const withConditionalAuth = (Auth, NonAuth, props) => {
  if (props) {
    return <Auth token={props} />;
  }

  if (!props) {
    return <NonAuth token={props} />;
  }
};

export default withConditionalAuth;
