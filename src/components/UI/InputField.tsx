import { Button, Grid, Stack, TextField } from "@mui/material";
import React, { useRef } from "react";

const UpdateTodo = ({ onUpdateTodo }) => {
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

    onUpdateTodo(updateTodo);
  };

  return (
    <form onSubmit={submitHandler}>
      <Stack spacing={2}>
        <Grid container spacing={0.5}>
          <Grid item xs={5}>
            <TextField
              inputRef={idRef}
              id="filled-multiline-flexible"
              label="ID"
              maxRows={4}
              variant="filled"
            />
          </Grid>
          <Grid item xs={8}>
            <TextField
              inputRef={titleRef}
              id="filled-basic"
              fullWidth
              label="Title"
              variant="filled"
              type="text"
            />
          </Grid>
          <Grid item xs={8}>
            <TextField
              inputRef={textRef}
              multiline
              rows={3}
              fullWidth
              id="filled-multiline-static"
              label="Text"
              variant="filled"
              type="text"
            />
          </Grid>
          <Grid item xs={6}>
            <Button type="submit" variant="outlined">
              Submit
            </Button>
          </Grid>
        </Grid>
      </Stack>
    </form>
  );
};

export default UpdateTodo;
