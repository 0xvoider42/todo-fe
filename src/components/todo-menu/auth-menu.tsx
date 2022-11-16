import { Box, AppBar, Toolbar, Typography, Button } from "@mui/material";
import { useState } from "react";

import ThemeSwitcher from "../ui/theme-switcher/theme-switcher";
import UserProfile from "../authentication/user-profile";

const AuthTodoMenu = () => {
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
                if (openUserModal) {
                  setOpenUserModal(false);
                  return;
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
