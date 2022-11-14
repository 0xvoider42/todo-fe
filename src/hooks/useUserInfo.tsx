import { useSelector } from "react-redux";
import { RootState } from "../store";

const useUserInfo = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const token = useSelector((state: RootState) => state.user.userToken);
  console.log(token);

  return { token, isLoggedIn: !!token };
};

export default useUserInfo;
