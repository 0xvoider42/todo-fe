import { Button, Container, Grid, Stack, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";

import { ApiTodo } from "../../models/todo";
import { editTodo } from "../../services/queries/edit-todo";

const UpdateTodo = () => {
  const { mutate } = useMutation(editTodo);

  const { register, handleSubmit } = useForm({
    defaultValues: { id: "", title: "", text: "" },
  });

  const submitHandler = (data: ApiTodo) => {
    mutate(data);
  };

  return (
    <Container maxWidth="md">
      <form onSubmit={handleSubmit(submitHandler)}>
        <Stack spacing={1.5} alignItems="baseline">
          <Grid container direction="column" item xs={2}>
            <TextField
              {...register("id", { required: true })}
              required
              id="outlined-multiline-flexible"
              label="ID"
              variant="outlined"
            />
          </Grid>
          <Grid container item xs={6}>
            <TextField
              {...register("title")}
              id="outlined-basic"
              fullWidth
              label="Title"
              variant="outlined"
              type="text"
            />
          </Grid>
          <Grid container item xs={6}>
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
        </Stack>
      </form>
    </Container>
  );
};

export default UpdateTodo;
