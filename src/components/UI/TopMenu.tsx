import { Breadcrumbs, Button, Link, Stack } from "@mui/material";
import { Container } from "@mui/system";

const TopMenu = (props) => {
  return (
    <Container>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="primary" href="/">
          All Todos
        </Link>
        <Link underline="hover" color="secondary" href="/new-todo">
          Add Todo
        </Link>
        <Link underline="hover" color="secondary" href="/edit-todo">
          Edit Todo
        </Link>
      </Breadcrumbs>
      <Stack direction="row" spacing={5} justifyContent="end">
        <Button variant="contained" href="/signup">
          Sign up
        </Button>
        <Button variant="outlined" href="/signin">
          Sign in
        </Button>
      </Stack>
    </Container>
  );
};

export default TopMenu;
