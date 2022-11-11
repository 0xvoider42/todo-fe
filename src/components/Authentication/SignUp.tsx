import {
  Alert,
  Button,
  Container,
  Grid,
  Link,
  Modal,
  Paper,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Router from "next/router";

import { AppDispatch } from "../../store";
import { FormInput } from "../../models/form";
import { userSignUp } from "../features/authentication/userAction";
import { UserState } from "../../models/userState";

const SignUp = ({ openSignUpModal, setOpenSignUpModal }) => {
  const dispatch: AppDispatch = useDispatch();

  const [successAlert, setSuccessAlert] = useState(false);
  const [errorAlert, setErrorAlert] = useState(false);

  const { success, error } = useSelector((state: UserState) => state.user);

  const { register, handleSubmit } = useForm<FormInput>({
    defaultValues: { email: "", password: "" },
  });

  const submitHandler = (data: FormInput) => {
    dispatch(userSignUp(data));
    Router.reload();
  };

  useEffect(() => {
    if (success) {
      setSuccessAlert(true);
    }
    if (error) {
      setErrorAlert(true);
    }
  }, [success, error]);

  return (
    <Modal
      open={openSignUpModal}
      onClose={() => setOpenSignUpModal(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Container maxWidth="sm">
        <Paper elevation={2}>
          <Box padding={2}>
            <Typography variant="h5" padding={2}>
              Sing Up
            </Typography>
            <form onSubmit={handleSubmit(submitHandler)}>
              <Stack spacing={1} alignItems="baseline">
                <Grid container direction="column" item xs={5}>
                  <TextField
                    {...register("email")}
                    fullWidth
                    required
                    label="Email"
                    id="outlined-basic"
                    variant="outlined"
                    type="text"
                  />
                </Grid>
                <Grid container item xs={6}>
                  <TextField
                    {...register("password")}
                    fullWidth
                    required
                    label="Password"
                    id="outlined-password-input"
                    variant="outlined"
                    type="password"
                    autoComplete="current-password"
                  />
                </Grid>
                <Box padding={1}>
                  <Stack spacing={2} direction="row">
                    <Button type="submit" variant="contained">
                      Sign Up
                    </Button>
                    <Link underline="none" href="/signin">
                      <Button color="secondary" variant="outlined">
                        Sign In
                      </Button>
                    </Link>
                  </Stack>
                </Box>
              </Stack>
            </form>
          </Box>
        </Paper>
        {successAlert ? (
          <Snackbar open={successAlert} autoHideDuration={2}>
            <Alert severity="success">User have been registered</Alert>
          </Snackbar>
        ) : null}
        {errorAlert ? (
          <Snackbar open={errorAlert} autoHideDuration={2}>
            <Alert severity="error">
              Something went wrong, check input values
            </Alert>
          </Snackbar>
        ) : null}
      </Container>
    </Modal>
  );
};

export default SignUp;
