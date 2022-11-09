import {
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@mui/material";
import { useMutation } from "react-query";

import { deleteTodo } from "../../services/queries/delete-todo";
import { receiveTodo } from "../../models/todo";

const TodoTable: ({ todos }: { todos: receiveTodo[] }) => JSX.Element = ({
  todos,
}) => {
  let token: string;

  if (typeof window !== "undefined") {
    token = localStorage.getItem("token");
  }

  const { mutate } = useMutation(deleteTodo);

  return (
    <Paper elevation={2}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Todo ID</TableCell>
              <TableCell align="right">Title</TableCell>
              <TableCell align="right">Text</TableCell>
              <TableCell align="right">Created</TableCell>
              <TableCell align="right">Updated</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {todos.map((todo: receiveTodo) => (
              <TableRow
                key={todo.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                onClick={() => mutate({ id: todo.id, token })}
              >
                <TableCell component="th" scope="row">
                  {todo.id}
                </TableCell>
                <TableCell align="right">{todo.title}</TableCell>
                <TableCell align="right">{todo.text}</TableCell>
                <TableCell align="right">{todo.createdAt}</TableCell>
                <TableCell align="right">{todo.updatedAt}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default TodoTable;
