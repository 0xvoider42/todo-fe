import {
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
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

import { userSignIn } from "../features/authentication/userAction";
import { formInput } from "../../models/form";
import { AppDispatch } from "../../store";

const SignIn = ({ openSignInModal, setOpenSignInModal }) => {
  const dispatch: AppDispatch = useDispatch();

  const { register, handleSubmit } = useForm<formInput>({
    defaultValues: { email: "", password: "" },
  });

  const submitHandler = (data: formInput) => {
    dispatch(userSignIn(data));
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
