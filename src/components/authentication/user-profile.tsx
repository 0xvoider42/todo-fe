import {
  Box,
  Button,
  Container,
  Modal,
  Paper,
  Typography,
} from "@mui/material";
import { deleteCookie } from "cookies-next";
import { useSnackbar } from "material-ui-snackbar-provider";

import { api } from "../../services/api";

const UserProfile = ({ openUserModal, setOpenUserModal }) => {
  const snackbar = useSnackbar();

  const handleSignOut = () => {
    deleteCookie("token");
    delete api.defaults.headers.common["Authorization"];
    snackbar.showMessage("You have been signed out!");
  };

  return (
    <Modal
      open={openUserModal}
      onClose={() => setOpenUserModal(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Container maxWidth="sm">
        <Paper elevation={2}>
          <Box padding={2}>
            <Typography variant="h5" padding={2}>
              User Profile
            </Typography>
            <Button onClick={handleSignOut}>Sign out</Button>
          </Box>
        </Paper>
      </Container>
    </Modal>
  );
};

export default UserProfile;
