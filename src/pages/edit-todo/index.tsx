import withAuthRedirect from "../../hoc/auth-redirect";
import InputField from "../../components/edit-todo";

const EditTodoPage = () => {
  return <InputField />;
};

export default withAuthRedirect(EditTodoPage);
