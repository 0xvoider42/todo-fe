import NewTodo from "../../components/NewTodo/NewTodo";

const NewTodoPage = () => {
  const addTodoHandler = async (todoData) => {
    const response = await fetch("http://localhost:3000/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(todoData),
    });
    return response;
  };

  return <NewTodo onAddTodo={addTodoHandler} />;
};

export default NewTodoPage;
