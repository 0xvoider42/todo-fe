import withAuthRedirect from "../../components/HOC/AuthRedirect";
import InputField from "../../components/UI/InputField";

const EditTodoPage = () => {
  return <InputField />;
};

export default withAuthRedirect(EditTodoPage);
