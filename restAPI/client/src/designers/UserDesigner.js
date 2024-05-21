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
import UserDialog from "./Dialogs/UserDialog";
import { useDeleteUserMutation } from "../users/userApiSlice";
const UserDesigner = ({user})=>{
  //const refetch = useSelector((myStore)=>myStore.TodoSlice.refetch)
  
  const [Delete] = useDeleteUserMutation()

  const [openDialog, setOpenDialog] = React.useState(false);

 


    return(
        <>
        <br/>
        
        <Card sx={{ '& > :not(style)': { m: 1 } }}>

        <Box sx={{ '& > :not(style)': { m: 1 } } }>
          <p>{user.name}</p>
          <p>{user.email}</p>

          <Fab color="secondary" aria-label="edit" onClick={()=>setOpenDialog(true)} >
        <EditIcon />
        {openDialog? <UserDialog user={user}/> : null}
      </Fab>
      <Fab color="action" aria-label="delete" onClick={()=>{Delete(user._id, 'Users'); }}>
      <DeleteIcon />
      </Fab>
    </Box>
</Card>
        </>
    )
}
export default UserDesigner;