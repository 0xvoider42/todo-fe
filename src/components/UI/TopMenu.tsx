import { Breadcrumbs, Link } from "@mui/material";

const TopMenu: () => JSX.Element = () => {
  return (
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
  );
};

export default TopMenu;
