import { Button, Grid, Stack, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import Todo from "../../models/todo";

const UpdateTodo = () => {
  const { register, handleSubmit } = useForm();

  const updateTodo = async (updateTodo: Todo) => {
    const { id } = updateTodo;
    const { title, text } = updateTodo;

    const response = await fetch(`http://localhost:3000/todos/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, text }),
    });

    return response;
  };

  const { mutate } = useMutation(updateTodo);

  const submitHandler = (data: Todo) => {
    mutate(data);
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <Stack spacing={2}>
        <Grid container spacing={0.5}>
          <Grid item xs={5}>
            <TextField
              {...register("id", { required: true })}
              required
              id="outlined-multiline-flexible"
              label="ID"
              maxRows={4}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={8}>
            <TextField
              {...register("title")}
              id="outlined-basic"
              fullWidth
              label="Title"
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
              id="outlined-multiline-static"
              label="Text"
              variant="outlined"
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
