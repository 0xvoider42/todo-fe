import useUserInfo from "../../hooks/useUserInfo";
import SignIn from "../Authentication/SignIn";
import SignUp from "../Authentication/SignUp";
import TodoTable from "../UI/TodoTable";

const withAuthRedirect = ({ todos }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { isLoggedIn } = useUserInfo();

  if (!isLoggedIn) {
    return <TodoTable todos={todos} />;
  }

  return (
    <>
      <SignIn openSignInModal={false} setOpenSignInModal={true} />
      <SignUp openSignUpModal={false} setOpenSignUpModal={true} />
      <TodoTable todos={todos} />
    </>
  );
};

export default withAuthRedirect;
