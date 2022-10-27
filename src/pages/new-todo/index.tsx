import NewTodo from "../../components/NewTodo/NewTodo";

const NewTodoPage = () => {
  const addTodoHandler = async () => {
    const response = await fetch("/todos");
    const data = response.json();

    console.log(data);
  };

  return <NewTodo onAddTodo={addTodoHandler} />;
};

export default NewTodoPage;
