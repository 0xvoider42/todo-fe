import { Button, Grid, Stack, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";

import { addTodo } from "../../services/queries/add-todo";
import { ApiTodo } from "../../models/todo";
import { Container } from "@mui/system";

const NewTodo = () => {
  const { mutate } = useMutation(addTodo);

  const { register, handleSubmit } = useForm({
    defaultValues: { title: "", text: "" },
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
              {...register("title")}
              fullWidth
              label="Title"
              id="outlined-basic"
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
              label="Text"
              id="outlined-basic"
              variant="outlined"
              type="text"
            />
          </Grid>
          <Button type="submit" variant="outlined">
            Submit
          </Button>
        </Stack>
      </form>
    </Container>
  );
};

export default NewTodo;
