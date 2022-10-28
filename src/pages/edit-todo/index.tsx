import InputField from "../../components/UI/InputField";

const EditTodo = () => {
  const search = async (updateTodo) => {
    const { id } = updateTodo;
    const { title, text } = updateTodo;

    const response = await fetch(`http://localhost:3000/todos/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, text }),
    });

    console.log(response);
  };

  return <InputField onUpdateTodo={search} />;
};

export default EditTodo;
