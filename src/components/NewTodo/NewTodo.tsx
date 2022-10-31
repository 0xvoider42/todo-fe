import { Button, Grid, Stack, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import Todo from "../../models/todo";

const NewTodo = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: { title: "", text: "" },
  });

  const submitHandler = (data: Todo) => {
    addTodoHandler(data);
  };

  const addTodoHandler = async (todoData: Todo) => {
    const response = await fetch("http://localhost:3000/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(todoData),
    });

    return response;
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
              id="filled-basic"
              variant="filled"
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
              id="filled-basic"
              variant="filled"
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
