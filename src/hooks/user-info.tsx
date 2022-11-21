import { useSelector } from "react-redux";

import { checkTokenValidity } from "../utils/token-validity-check";
import { RootState } from "../store";

const useUserInfo = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const token = useSelector((state: RootState) => state.user.userToken);

  if (checkTokenValidity(token)) {
    return { token, isLoggedIn: true };
  }

  return { token: null, isLoggedIn: false };
};

export default useUserInfo;
