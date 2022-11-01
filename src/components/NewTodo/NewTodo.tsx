import { Button, Grid, Stack, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";

import { api } from "../../services/api";
import Todo from "../../models/todo";

const NewTodo = () => {
  const addTodoHandler = (todoData: Todo) => {
    const response = api.post("/todos", {
      title: todoData.title,
      text: todoData.text,
    });

    return response;
  };

  const { mutate } = useMutation(addTodoHandler);

  const { register, handleSubmit } = useForm({
    defaultValues: { title: "", text: "" },
  });

  const submitHandler = (data: Todo) => {
    mutate(data);
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <Stack spacing={2} alignItems="flex-start">
        <Grid container spacing={0.5}>
          <Grid item xs={8}>
            <TextField
              {...register("title")}
              fullWidth
              label="Title"
              id="outlined-basic"
              variant="outlined"
              type="text"
            />
          </Grid>
          <Grid item xs={8}>
            <TextField
              {...register("text")}
              multiline
              rows={3}
              fullWidth
              label="Text"
              id="outlined-basic"
              variant="outlined"
              type="text"
            />
          </Grid>
        </Grid>
        <Button type="submit" variant="outlined">
          Submit
        </Button>
      </Stack>
    </form>
  );
};

export default NewTodo;
