import { Button, TextField } from "@mui/material";
import React, { useRef } from "react";

const UpdateTodo = (props) => {
  const idRef = useRef<HTMLInputElement>(null);
  const titleRef = useRef<HTMLInputElement>(null);
  const textRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredId = idRef.current!.value;
    const enteredTitle = titleRef.current.value;
    const enteredText = textRef.current.value;

    const updateTodo = {
      id: enteredId,
      title: enteredTitle,
      text: enteredText,
    };

    props.onUpdateTodo(updateTodo);
  };

  return (
    <form onSubmit={submitHandler}>
      <TextField
        inputRef={idRef}
        id="filled-multiline-flexible"
        label="ID"
        multiline
        maxRows={4}
        variant="filled"
      />
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
      <Button type="submit" color="primary">
        Submit
      </Button>
    </form>
  );
};

export default UpdateTodo;
