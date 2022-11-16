import { checkTokenValidity } from "../components/features/tokenValidityCheck";
import { RootState } from "../store";
import { useSelector } from "react-redux";

const useUserInfo = () => {
  let isLoggedIn = true;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const token = useSelector((state: RootState) => state.user.userToken);

  if (!checkTokenValidity(token)) {
    return { token, isLoggedIn };
  }

  return { token: null, isLoggedIn: false };
};

export default useUserInfo;
