import {
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Alert,
  Snackbar,
} from "@mui/material";
import { getCookie } from "cookies-next";
import { useMutation } from "react-query";
import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";

import { deleteTodo } from "../../services/queries/delete-todo";
import { ReceiveTodo } from "../../models/todo";

const TodoTable: ({ todos }: { todos: ReceiveTodo[] }) => JSX.Element = ({
  todos,
}) => {
  const [alert, setAlert] = useState(false);

  const cookies = getCookie("token");

  const { mutate } = useMutation(deleteTodo);

  return (
    <Paper elevation={2}>
      {alert ? (
        <Snackbar open={alert} autoHideDuration={3000}>
          <Alert
            severity="error"
            onClose={() => {
              setAlert(false);
            }}
          >
            Todo has been deleted
          </Alert>
        </Snackbar>
      ) : null}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Todo ID</TableCell>
              <TableCell align="right">Title</TableCell>
              <TableCell align="right">Text</TableCell>
              <TableCell align="right">Created</TableCell>
              <TableCell align="right">Updated</TableCell>
              <TableCell align="right">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {todos.map((todo: ReceiveTodo) => (
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
                <TableCell align="right">
                  <IconButton
                    aria-label="delete"
                    size="medium"
                    color="error"
                    onClick={() => {
                      mutate({ id: todo.id });
                      setAlert(true);
                    }}
                  >
                    <DeleteIcon fontSize="small" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default TodoTable;
