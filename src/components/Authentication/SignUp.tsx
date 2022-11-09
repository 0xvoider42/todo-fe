import {
  Button,
  Container,
  Grid,
  TextField,
  Stack,
  Typography,
  Link,
  Paper,
  Modal,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Box } from "@mui/system";

import { AppDispatch } from "../../store";
import { formInput } from "../../models/form";
import { userSignUp } from "../features/authentication/userAction";

const SignUp = ({ openSignUpModal, setOpenSignUpModal }) => {
  const dispatch: AppDispatch = useDispatch();

  const { register, handleSubmit } = useForm<formInput>({
    defaultValues: { email: "", password: "" },
  });

  const submitHandler = (data: formInput) => {
    dispatch(userSignUp(data));
  };

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
      </Container>
    </Modal>
  );
};

export default SignUp;
