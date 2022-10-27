import { Button, TextField } from "@mui/material";
import { useRef } from "react";

const NewTodo = (props) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const textRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredTitle = titleRef.current.value;
    const enteredText = textRef.current!.value;

    const todoData = {
      title: enteredTitle,
      text: enteredText,
    };

    props.onAddTodo(todoData);
  };

  return (
    <form onSubmit={submitHandler}>
      <TextField
        inputRef={titleRef}
        fullWidth
        id="filled-basic"
        label="Title"
        variant="filled"
        type="text"
      />
      <TextField
        inputRef={textRef}
        fullWidth
        id="filled-basic"
        label="Text"
        variant="filled"
        type="text"
      />
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default NewTodo;
