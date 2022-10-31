import {
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@mui/material";
import Todo from "../../models/todo";

// interface Props {
//   id: number;
//   title: string;
//   text: string;
//   createdAt: string;
//   updatedAt: string;
// }

const TodoTable: (todos: Todo[]) => JSX.Element = ({ todos }) => {
  const onRemoveTodo = async (id: number) => {
    const response = await fetch(`http://localhost:3000/todos/${id}`, {
      method: "DELETE",
    });

    return response;
  };

  return (
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
          {todos.map((todo: Todo) => (
            <TableRow
              key={todo.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              onClick={() => onRemoveTodo(todo.id)}
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
  );
};

export default TodoTable;
