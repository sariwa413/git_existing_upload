import React from "react";
import PostDesigner from "../designers/PostDesigner";
import AddButton from "../designers/AddButton";
import useAxios from "axios-hooks";
import { useSelector } from "react-redux";
import { useGetPostsQuery } from "../posts/postsApiSlice";
import PrivateRoute from "../auth/PrivateRoute";
import NavBar_Caller from "../designers/NavBar_Caller";
import { useEffect } from "react";
///////////////////////////////////////////////////////////////

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
import TodoDialog from '../designers/Dialogs/TodoDialog'

import Card from '@mui/material/Card';
import UserDialog from "../designers/Dialogs/UserDialog"
import PostDialog from "../designers/Dialogs/PostDialog"
import { useDeletePostMutation } from "../posts/postsApiSlice";
////////////////////////////
const PostsPage = ()=>{
  const {CheckToken} = PrivateRoute()
  CheckToken()

  const {data: posts , isError, isLoading, error} =  useGetPostsQuery('',{refetchOnMountOrAgChange: true, 
    refetchOnFocus: true})
 /////////////////////
 const [Delete] = useDeletePostMutation()

  const [openDialog, setOpenDialog] = React.useState(false);

 
    return(
        <div>
          <NavBar_Caller/>
             <AddButton p = {'Posts'}/>
    
             { (posts? posts.map(post=>      
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
</Card>):
<p>No posts in DB</p> )}
        </div>
    )
};

export default PostsPage;






