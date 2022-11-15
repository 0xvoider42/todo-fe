import {
  Alert,
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Snackbar,
  Stack,
  TextField,
} from "@mui/material";
import Router from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import useUserInfo from "../../hooks/useUserInfo";

import { ApiTodo } from "../../models/todo";
import { editTodo } from "../../services/queries/edit-todo";

const UpdateTodo = () => {
  const { mutate } = useMutation(editTodo);
  const [open, setOpen] = useState(false);

  const { isLoggedIn } = useUserInfo();

  const { register, handleSubmit } = useForm({});

  const submitHandler = (data: ApiTodo) => {
    mutate({ ...data });
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (!isLoggedIn) {
      Router.push("/");
      console.log("not logged");
    }
  });

  return (
    <Paper elevation={2}>
      <Container maxWidth="md">
        <Box padding={2}>
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
          <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
            <Alert
              onClose={handleClose}
              severity="success"
              sx={{ width: "100%" }}
            >
              The Todo has been edited!
            </Alert>
          </Snackbar>
        </Box>
      </Container>
    </Paper>
  );
};

export default UpdateTodo;
