import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { useState } from "react";
import SignIn from "../Authentication/SignIn";
import SignUp from "../Authentication/SignUp";
import ThemeSwitcher from "./ThemeSwitcher";

const TopMenu = () => {
  const [openSignInModal, setOpenSignInModal] = useState(false);
  const [openSignUpModal, setOpenSignUpModal] = useState(false);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <SignIn
        openSignInModal={openSignInModal}
        setOpenSignInModal={setOpenSignInModal}
      />
      <SignUp
        openSignUpModal={openSignUpModal}
        setOpenSignUpModal={setOpenSignUpModal}
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
              color="inherit"
              onClick={() => {
                if (openSignUpModal === true) {
                  setOpenSignUpModal(false);
                }
                setOpenSignInModal(!openSignInModal);
              }}
            >
              Sign in
            </Button>
          </Box>
          <Box padding={1}>
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => {
                if (openSignInModal === true) {
                  setOpenSignInModal(false);
                }
                setOpenSignUpModal(true);
              }}
            >
              Sign up
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default TopMenu;
