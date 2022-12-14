import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
} from "@mui/material";
import { useMutation } from "react-query";
import { useSnackbar } from "material-ui-snackbar-provider";
import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";

import { deleteTodo } from "../services/queries/delete-todo";
import { ReceiveTodo } from "../models/todo";
import useUserInfo from "../hooks/user-info";
import withAuthRedirect from "../hoc/auth-redirect";
import { authGetServerSideProps } from "../hoc/auth-route";
import { getTodos } from "../services/queries/get-todos";

export const getServerSideProps = authGetServerSideProps(async () => {
  const todoData = await getTodos();

  return {
    props: { todos: todoData.data },
  };
});

const TodoTable: ({ todos }: { todos: ReceiveTodo[] }) => JSX.Element = ({
  todos,
}) => {
  const [todoTable, setTodoTable] = useState(todos);

  const { isLoggedIn } = useUserInfo();

  const snackbar = useSnackbar();

  const { mutate } = useMutation(deleteTodo);

  const handleDelete = ({ id }) => {
    const index = todoTable.findIndex((el) => el.id === id);
    todoTable.splice(index, 1);
    setTodoTable(todoTable);
    mutate({ id });
    snackbar.showMessage("Todo has been deleted!");
  };

  return (
    <Paper elevation={2} sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ minWidth: 650, maxHeight: 600 }}>
        <Table stickyHeader aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Todo ID</TableCell>
              <TableCell align="right">Title</TableCell>
              <TableCell align="right">Text</TableCell>
              <TableCell align="right">Created</TableCell>
              <TableCell align="right">Updated</TableCell>
              {isLoggedIn && <TableCell align="right">Delete</TableCell>}
            </TableRow>
          </TableHead>
          <TableBody>
            {todoTable.map((todo: ReceiveTodo) => (
              <TableRow
                key={todo.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {todo.id}
                </TableCell>
                <TableCell align="right">{todo.title}</TableCell>
                <TableCell align="right">{todo.text}</TableCell>
                <TableCell align="right">{todo.createdAt}</TableCell>
                <TableCell align="right">{todo.updatedAt}</TableCell>
                {isLoggedIn && (
                  <TableCell align="right">
                    <Tooltip title="Delete">
                      <IconButton
                        aria-label="delete"
                        size="medium"
                        color="error"
                        onClick={() => {
                          handleDelete({ id: todo.id });
                        }}
                      >
                        <DeleteIcon fontSize="small" />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default withAuthRedirect(TodoTable);
