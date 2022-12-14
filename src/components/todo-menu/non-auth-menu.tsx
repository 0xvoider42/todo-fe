import { Box, AppBar, Toolbar, Typography, Button } from "@mui/material";
import { useState } from "react";

import SignIn from "../authentication/sign-in-modal";
import SignUp from "../authentication/sign-up-modal";
import ThemeSwitcher from "../ui/theme-switcher";

const NonAuthTodoMenu = () => {
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
            <ThemeSwitcher />
          </Typography>
          <Box padding={1}>
            <Button
              color="inherit"
              onClick={() => setOpenSignInModal(!openSignInModal)}
            >
              Sign in
            </Button>
          </Box>
          <Box padding={1}>
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => setOpenSignUpModal(!openSignUpModal)}
            >
              Sign up
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NonAuthTodoMenu;
