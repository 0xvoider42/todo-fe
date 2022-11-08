import {
  Button,
  Container,
  Grid,
  Link,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import { userSignIn } from "../features/authentication/userAction";
import { formInput } from "../../models/form";
import { AppDispatch } from "../../store";
import { userState } from "../../models/userState";

const SignIn = () => {
  const { loading, error, success } = useSelector(
    (state: userState) => state.user
  );

  const dispatch: AppDispatch = useDispatch();

  const { register, handleSubmit } = useForm<formInput>({
    defaultValues: { email: "", password: "" },
  });

  const submitHandler = (data: formInput) => {
    dispatch(userSignIn(data));
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h5">Sing In</Typography>
      <form onSubmit={handleSubmit(submitHandler)}>
        <Stack spacing={1.5} alignItems="baseline">
          <Grid container direction="column" item xs={4}>
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
          <Grid container item xs={4}>
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
          <Stack direction="row" spacing={2}>
            <Button type="submit" variant="contained" size="large">
              Sign In
            </Button>
            <Link underline="none" href="/signup">
              <Button color="secondary" variant="outlined">
                Sign Up
              </Button>
            </Link>
          </Stack>
        </Stack>
      </form>
    </Container>
  );
};

export default SignIn;
