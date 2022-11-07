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
import { useMutation } from "react-query";
import { useDispatch, useSelector } from "react-redux";

import { signIn } from "../../services/auth/singIn";
import { userSignIn } from "../features/authentication/userAction";

type FormInput = {
  email: string;
  password: string;
};

const SignIn = () => {
  const { loading, error } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const { mutate } = useMutation(signIn);

  const { register, handleSubmit } = useForm<FormInput>({
    defaultValues: { email: "", password: "" },
  });

  const submitHandler = (data: FormInput) => {
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
