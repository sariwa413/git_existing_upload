import React from "react";
import { Box, Card, CardContent, Fab, Checkbox } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import TodoDialog from "./Dialogs/TodoDialog";
import { useUpdateTodoCompleteMutation, useDeleteTodoMutation } from "../todos/todosApiSlice";

const TodoDesigner = ({ todo }) => {
  const [isChecked, setIsChecked] = React.useState(todo.completed);
  const [openDialog, setOpenDialog] = React.useState(false);
  const [UpdateCompleted] = useUpdateTodoCompleteMutation();
  const [Delete] = useDeleteTodoMutation();

  const handleCheckChange = () => {
    setIsChecked(!isChecked);
    UpdateCompleted(todo._id);
  };

  return (
    <Box mb={2}>
      <Card>
        <CardContent>
          <Checkbox checked={isChecked} onChange={handleCheckChange} />
          <h2>{todo.title}</h2>
          <p>{todo.createdAt}</p>
          <Box display="flex" justifyContent="center">
            <Box>
              <Fab color="secondary" aria-label="edit" size="small" onClick={() => setOpenDialog(true)}>
                <EditIcon />
              </Fab>
              <Fab color="error" aria-label="delete" size="small" onClick={() => Delete(todo._id)} sx={{ marginLeft: 1 }}>
                <DeleteIcon />
              </Fab>
            </Box>
          </Box>
        </CardContent>
      </Card>
      {openDialog && <TodoDialog todo={todo} />}
    </Box>
  );
};

export default TodoDesigner;
