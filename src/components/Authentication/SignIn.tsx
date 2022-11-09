import {
  Alert,
  Box,
  Button,
  Container,
  Grid,
  Link,
  Modal,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { useState } from "react";

import { AppDispatch } from "../../store";
import { formInput } from "../../models/form";
import { userSignIn } from "../features/authentication/userAction";

const SignIn = ({ openSignInModal, setOpenSignInModal }) => {
  const dispatch: AppDispatch = useDispatch();
  const [signIn, setSignIn] = useState(false);

  const { register, handleSubmit } = useForm<formInput>({
    defaultValues: { email: "", password: "" },
  });

  const checkStatus = () => {
    if (!userSignIn.fulfilled) {
      setSignIn(false);
    }
    setSignIn(true);
  };

  const submitHandler = (data: formInput) => {
    dispatch(userSignIn(data));
    checkStatus();
  };

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
              {signIn === false ? (
                <Alert severity="error">
                  Email or password was wrong, try again
                </Alert>
              ) : (
                setOpenSignInModal(false)
              )}
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
      </Container>
    </Modal>
  );
};

export default SignIn;
