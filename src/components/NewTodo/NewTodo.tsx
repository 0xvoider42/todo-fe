import { Button, Grid, Stack, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";

import { addTodo } from "../../services/queries/add-todo";
import { ApiTodo } from "../../models/todo";

const NewTodo = () => {
  const { mutate } = useMutation(addTodo);

  const { register, handleSubmit } = useForm({
    defaultValues: { title: "", text: "" },
  });

  const submitHandler = (data: ApiTodo) => {
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
