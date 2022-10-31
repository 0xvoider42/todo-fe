import InputField from "../../components/UI/InputField";
import Todo from "../../models/todo";

const EditTodo: () => JSX.Element = () => {
  const updateTodo = async (updateTodo: Todo) => {
    const { id } = updateTodo;
    const { title, text } = updateTodo;

    await fetch(`http://localhost:3000/todos/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, text }),
    });
  };

  return <InputField onUpdateTodo={updateTodo} />;
};

export default EditTodo;
