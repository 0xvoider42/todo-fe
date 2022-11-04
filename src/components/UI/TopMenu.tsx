import { Breadcrumbs, Link } from "@mui/material";
import { Container } from "@mui/system";

const TopMenu: () => JSX.Element = () => {
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
    </Container>
  );
};

export default TopMenu;
