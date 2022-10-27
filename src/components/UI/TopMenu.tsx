import { Breadcrumbs, Link } from "@mui/material";

const TopMenu = (props) => {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link underline="hover" color="primary" href="/">
        All Todos
      </Link>
      <Link underline="hover" color="secondary" href="/new-todo">
        Add Todo
      </Link>
    </Breadcrumbs>
  );
};

export default TopMenu;
