import React from "react";
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import CheckBox from '@mui/material/Checkbox';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';
import Edit from "@mui/icons-material/Edit";
import DeleteIcon from '@mui/icons-material/Delete'
import { IconButton } from "@mui/material";
import SaveIcon from '@mui/icons-material/Save';
import TodosPage from "../Pages/TodosPage";
import TodoDialog from './Dialogs/TodoDialog'
import { useSelector } from "react-redux";
import Card from '@mui/material/Card';
import { useUpdateTodoCompleteMutation } from "../todos/todosApiSlice";
import { useDeleteTodoMutation } from "../todos/todosApiSlice";
const TodoDesigner = ({todo})=>{

 const [isChecked, setIsChecked] = React.useState(todo.completed);
const [UpdateCompleted] = useUpdateTodoCompleteMutation()
  const [Delete] = useDeleteTodoMutation()



  const UpdateCheck=()=>{
    setIsChecked(!isChecked)
    UpdateCompleted(todo._id)
    
  }

  const [openDialog, setOpenDialog] = React.useState(false);

 


    return(
        <>
        <br/>
        




        <Card sx={{ '& > :not(style)': { m: 1 } }}>
  
      
<CheckBox 
  checked={isChecked} 
  onChange={(e) => { 
    UpdateCheck()
  }}
/>
        <Box sx={{ '& > :not(style)': { m: 1 } } }>
          <p>{todo.title}</p>
         {/* {todo.tags.map(t=><p>{t}</p>)} */}
        <p>{todo.createdAt}</p>

          <Fab color="secondary" aria-label="edit" onClick={()=>setOpenDialog(true)} >
        <EditIcon />
        {openDialog? <TodoDialog todo={todo}/> : null}
      </Fab>
      <Fab color="action" aria-label="delete" onClick={()=>{Delete(todo._id); }}>
      <DeleteIcon />
      </Fab>
    </Box>
</Card>
        </>
    )
}
export default TodoDesigner;