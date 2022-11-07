import {
  Button,
  Container,
  Grid,
  TextField,
  Stack,
  Typography,
  Link,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { useDispatch, useSelector } from "react-redux";

import { userSignUp } from "../features/authentication/userAction";

type FormInput = {
  email: string;
  password: string;
};

const SignUp = () => {
  const { loading, error, userInfo, success } = useSelector(
    (state) => state.user
  );

  const dispatch = useDispatch();

  // const { mutate } = useMutation(signUp);

  const { register, handleSubmit } = useForm<FormInput>({
    defaultValues: { email: "", password: "" },
  });

  const submitHandler = (data: FormInput) => {
    dispatch(userSignUp(data));
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h5">Sing Up</Typography>
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
          <Stack spacing={2} direction="row">
            <Button type="submit" variant="contained" size="large">
              Sign Up
            </Button>
            <Link underline="none" href="/signin">
              <Button color="secondary" variant="outlined">
                Sign In
              </Button>
            </Link>
          </Stack>
        </Stack>
      </form>
    </Container>
  );
};

export default SignUp;
