import {
  Alert,
  Box,
  Button,
  Grid,
  Paper,
  Snackbar,
  Stack,
  TextField,
} from "@mui/material";
import { Container } from "@mui/system";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import Router from "next/router";

import { addTodo } from "../../services/queries/add-todo";
import { ApiTodo } from "../../models/todo";
import useUserInfo from "../../hooks/useUserInfo";

const NewTodo = () => {
  const { mutate } = useMutation(addTodo);

  const [open, setOpen] = useState(false);

  const { isLoggedIn } = useUserInfo();

  const { register, handleSubmit } = useForm({
    defaultValues: { title: "", text: "" },
  });

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
    }
  });

  return (
    <Paper elevation={2}>
      <Container maxWidth="md">
        <Box padding={3}>
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

export default NewTodo;
