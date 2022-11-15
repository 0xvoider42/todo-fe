import { useSelector } from "react-redux";
import { checkTokenValidity } from "../components/features/tokenValidityCheck";
import { RootState } from "../store";

const useUserInfo = () => {
  let isLoggedIn = true;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const token = useSelector((state: RootState) => state.user.userToken);

  return !checkTokenValidity(token)
    ? { token, isLoggedIn }
    : { token, isLoggedIn: false };
};

export default useUserInfo;
