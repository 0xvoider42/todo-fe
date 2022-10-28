import {
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@mui/material";

interface Props {
  id: number;
  title: string;
  text: string;
  createdAt: string;
  updatedAt: string;
}

const TodoTable: React.FC<{
  todos: Props[];
  onRemoveTodo: (id: number) => void;
}> = ({ todos, onRemoveTodo }) => {
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
          {todos.map((todo) => (
            <TableRow
              key={todo.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              onClick={onRemoveTodo.bind(null, todo.id)}
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
