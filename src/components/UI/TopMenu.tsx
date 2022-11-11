import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { useState } from "react";

import { checkTokenValidity } from "../features/tokenValidityCheck";
import SignIn from "../Authentication/SignIn";
import SignUp from "../Authentication/SignUp";
import ThemeSwitcher from "./ThemeSwitcher";
import UserProfile from "../Authentication/UserProfile";

const TopMenu = ({ token }) => {
  const [openSignInModal, setOpenSignInModal] = useState(false);
  const [openSignUpModal, setOpenSignUpModal] = useState(false);
  const [openUserModal, setOpenUserModal] = useState(false);

  if (checkTokenValidity(token)) {
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
              <ThemeSwitcher />
            </Typography>
            <Box padding={1}>
              <Button
                color="inherit"
                onClick={() => {
                  if (openSignUpModal) {
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
  }

  if (!checkTokenValidity(token)) {
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
  }
};

export default TopMenu;
