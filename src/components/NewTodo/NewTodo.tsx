import { Button, Grid, Stack, TextField } from "@mui/material";
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
      <Stack spacing={2} alignItems="flex-start">
        <Grid container spacing={0.5}>
          <Grid item xs={8}>
            <TextField
              inputRef={titleRef}
              fullWidth
              id="filled-basic"
              label="Title"
              variant="filled"
              type="text"
            />
          </Grid>
          <Grid item xs={8}>
            <TextField
              inputRef={textRef}
              fullWidth
              id="filled-basic"
              label="Text"
              variant="filled"
              type="text"
            />
          </Grid>
        </Grid>
        <Button type="submit">Submit</Button>
      </Stack>
    </form>
  );
};

export default NewTodo;
