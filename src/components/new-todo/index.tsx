import { Box, Button, Grid, Paper, Stack, TextField } from "@mui/material";
import { Container } from "@mui/system";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { useSnackbar } from "material-ui-snackbar-provider";

import { addTodo } from "../../services/queries/add-todo";
import { ApiTodo } from "../../models/todo";

const NewTodo = () => {
  const { mutate } = useMutation(addTodo);

  const snackbar = useSnackbar();

  const { register, handleSubmit } = useForm({
    defaultValues: { title: "", text: "" },
  });

  const submitHandler = (data: ApiTodo) => {
    mutate(data);
    snackbar.showMessage("Todo has been created!");
  };

  return (
    <Paper elevation={2}>
      <Container maxWidth="md">
        <Box padding={3}>
          <form onSubmit={handleSubmit(submitHandler)}>
            <Stack spacing={1.5} alignItems="baseline">
              <Grid container direction="column" item xs={2}>
                <TextField
                  {...register("title", { required: true })}
                  fullWidth
                  label="Title"
                  id="outlined-basic"
                  variant="outlined"
                  type="text"
                />
              </Grid>
              <Grid container item xs={6}>
                <TextField
                  {...register("text", { required: true })}
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
        </Box>
      </Container>
    </Paper>
  );
};

export default NewTodo;
