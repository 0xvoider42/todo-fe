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
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";

import { deleteTodo } from "../services/queries/delete-todo";
import { ApiTodo, ReceiveTodo } from "../models/todo";
import useUserInfo from "../hooks/user-info";
import { useState } from "react";
import { getTodos } from "../services/queries/get-todos";
import withAuthRedirect from "../hoc/auth-redirect";

export const getServerSideProps = async (ctx) => {
  const data: ApiTodo[] = await getTodos();

  return {
    props: {
      todos: data,
    },
  };
};

const TodoTable: ({ todos }: { todos: ReceiveTodo[] }) => JSX.Element = ({
  todos,
}) => {
  const [Todos, setTodos] = useState(todos);
  const { isLoggedIn } = useUserInfo();

  const snackbar = useSnackbar();

  const { mutate } = useMutation(deleteTodo);

  const handleDelete = (id) => {
    Todos.splice(id, 1);
    setTodos(Todos);
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
            {Todos.map((todo: ReceiveTodo) => (
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
                          mutate({ id: todo.id });
                          handleDelete({ id: todo.id });
                          snackbar.showMessage("Todo has been deleted!");
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
