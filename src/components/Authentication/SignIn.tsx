import {
  Alert,
  Box,
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
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";

import { AppDispatch } from "../../store";
import { FormInput } from "../../models/form";
import { userSignIn } from "../features/authentication/userAction";
import { UserState } from "../../models/userState";
import { useEffect, useState } from "react";

const SignIn = ({ openSignInModal, setOpenSignInModal }) => {
  const dispatch: AppDispatch = useDispatch();

  const [successAlert, setSuccessAlert] = useState(false);
  const [errorAlert, setErrorAlert] = useState(false);

  const { success, error } = useSelector((state: UserState) => state.user);

  const { register, handleSubmit } = useForm<FormInput>({
    defaultValues: { email: "", password: "" },
  });

  const submitHandler = (data: FormInput) => {
    dispatch(userSignIn(data));
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
      open={openSignInModal}
      onClose={() => setOpenSignInModal(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Container maxWidth="sm">
        <Paper elevation={2}>
          <Box padding={2}>
            <Typography variant="h5" padding={2}>
              Sing In
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
                  <Stack direction="row" spacing={2}>
                    <Button type="submit" variant="contained">
                      Sign In
                    </Button>
                    <Link underline="none" href="/signup">
                      <Button color="secondary" variant="outlined">
                        Sign Up
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
            <Alert severity="success">Sign in successful</Alert>
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

export default SignIn;
