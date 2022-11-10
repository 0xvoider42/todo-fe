import { Box, Container, Modal, Paper, Typography } from "@mui/material";

const UserProfile = ({ openUserModal, setOpenUserModal }) => {
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
          </Box>
        </Paper>
      </Container>
    </Modal>
  );
};

export default UserProfile;
