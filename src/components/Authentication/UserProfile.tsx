import {
  Alert,
  Box,
  Button,
  Container,
  Modal,
  Paper,
  Snackbar,
  Typography,
} from "@mui/material";
import { deleteCookie } from "cookies-next";
import { useEffect, useState } from "react";
import Router from "next/router";

const UserProfile = ({ openUserModal, setOpenUserModal }) => {
  const [signOutAlert, setSignOutAlert] = useState(false);

  const handleSignOut = () => {
    deleteCookie("token");
    Router.reload();
  };

  useEffect(() => {
    if (handleSignOut) {
      setSignOutAlert(true);
    }
  }, []);

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
          <Snackbar open={signOutAlert} autoHideDuration={2}>
            <Alert severity="success">you have been signed out</Alert>
          </Snackbar>
        </Paper>
      </Container>
    </Modal>
  );
};

export default UserProfile;
