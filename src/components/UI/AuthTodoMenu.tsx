import { Box, AppBar, Toolbar, Typography, Button } from "@mui/material";
import { useState } from "react";
import UserProfile from "../Authentication/UserProfile";
import ThemeSwitcher from "./ThemeSwitcher";

const AuthTodoMenu = ({ token }) => {
  const [openUserModal, setOpenUserModal] = useState(false);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <UserProfile
        openUserModal={openUserModal}
        setOpenUserModal={setOpenUserModal}
      />
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Button color="inherit" href="/">
              All Todos
            </Button>
            <Button color="inherit" href="/new-todo">
              Add new Todo
            </Button>
            <Button color="inherit" href="/edit-todo">
              Edit Todo
            </Button>
            <ThemeSwitcher />
          </Typography>
          <Box padding={1}>
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => {
                if (openUserModal === true) {
                  setOpenUserModal(false);
                }
                setOpenUserModal(true);
              }}
            >
              User profile
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default AuthTodoMenu;
