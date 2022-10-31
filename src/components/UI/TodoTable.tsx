import {
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Alert,
  LinearProgress,
} from "@mui/material";
import { useMutation, useQuery } from "react-query";
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

  const { mutate } = useMutation(onRemoveTodo);

  const fetchTodo = async () => {
    const fetchingTodos = await todos;
    return fetchingTodos;
  };

  const { data, isLoading, isError } = useQuery("todos", fetchTodo);

  if (isLoading) return <LinearProgress color="secondary" />;

  if (isError) return <Alert severity="error">Something went wrong</Alert>;

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
          {data.map((todo: Todo) => (
            <TableRow
              key={todo.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              onClick={() => mutate(todo.id)}
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
