import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSnackbar } from "material-ui-snackbar-provider";

import { AppDispatch } from "../../store";
import { FormInput } from "../../models/form";
import { userSignUp } from "../features/authentication/userAction";
import { UserState } from "../../models/userState";

const AuthPage = () => {
  const dispatch: AppDispatch = useDispatch();

  const snackbar = useSnackbar();

  const { success, error } = useSelector((state: UserState) => state.user);

  const { register, handleSubmit } = useForm<FormInput>({
    defaultValues: { email: "", password: "" },
  });

  const submitHandler = (data: FormInput) => {
    dispatch(userSignUp(data));
  };

  useEffect(() => {
    if (success) {
      snackbar.showMessage("You have been registered!");
    }
    if (error) {
      snackbar.showMessage("Something went wrong!");
    }
  });

  return (
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
                  <Button type="submit" variant="contained" color="secondary">
                    Sign Up
                  </Button>
                </Stack>
              </Box>
            </Stack>
          </form>
        </Box>
      </Paper>
    </Container>
  );
};

export default AuthPage;
