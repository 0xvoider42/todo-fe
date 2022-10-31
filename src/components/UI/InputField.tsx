import { Button, Grid, Stack, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import Todo from "../../models/todo";

const UpdateTodo = ({ onUpdateTodo }) => {
  const { register, handleSubmit } = useForm();

  const submitHandler = (data: Todo) => {
    onUpdateTodo(data);
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <Stack spacing={2}>
        <Grid container spacing={0.5}>
          <Grid item xs={5}>
            <TextField
              {...register("Id", { required: true })}
              required
              id="filled-multiline-flexible"
              label="ID"
              maxRows={4}
              variant="filled"
            />
          </Grid>
          <Grid item xs={8}>
            <TextField
              {...register("title")}
              id="filled-basic"
              fullWidth
              label="Title"
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
