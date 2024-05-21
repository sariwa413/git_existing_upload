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
import TodosPage from "../Pages/TodosPage"
import TodoDialog from './Dialogs/TodoDialog'
import { useSelector } from "react-redux";
import Card from '@mui/material/Card';
import UserDialog from "./Dialogs/UserDialog";
import PostDialog from "./Dialogs/PostDialog"
import { useDeletePostMutation } from "../posts/postsApiSlice";
const PostDesigner = ({post})=>{
  //const refetch = useSelector((myStore)=>myStore.TodoSlice.refetch)
  
  const [Delete] = useDeletePostMutation()

  const [openDialog, setOpenDialog] = React.useState(false);

 

    return(
        <>  
        
        <br/>
        
        <Card sx={{ '& > :not(style)': { m: 1 } }}>

        <Box sx={{ '& > :not(style)': { m: 1 } } }>
          <p>{post.title}</p>
          <p>{post.body}</p>

          <Fab color="secondary" aria-label="edit" onClick={()=>setOpenDialog(true)} >
        <EditIcon />
        {openDialog? <PostDialog post={post}/> : null}
      </Fab>
      <Fab color="action" aria-label="delete" onClick={()=>{Delete(post._id); }}>
      <DeleteIcon />
      </Fab>
    </Box>
</Card>
        </>
    )
}
export default PostDesigner;


