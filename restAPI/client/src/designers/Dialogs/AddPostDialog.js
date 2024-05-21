////הורדתי תעמוד הזה קומפלט מMUIד
import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useCreatePostMutation } from '../../posts/postsApiSlice';
import { useSelector } from "react-redux";


 function AddPostDialog({post}) {
    const [Add] = useCreatePostMutation()
    
  
   
    const [open, setOpen] = React.useState(true);
const [title, setTitle] = React.useState()
const [body, setBody] = React.useState()

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave=()=>{
    Add({title: title, body: body})
    
  }

  return (
    
    <div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Edit</DialogTitle>
        <DialogContent>
          <DialogContentText>
           Edit the fields you wish
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="enter the post title"
            type="text"
            placeholder = {'enter the post title'}
            onChange={(e)=>setTitle(e.target.value)}
            fullWidth
            
          />

             <TextField
            autoFocus
            margin="dense"
            id="userName"
            label="enter post body"
            type="text"
            placeholder=  {'enter post body'}
            onChange={(e)=>setBody(e.target.value)}

            fullWidth
          />
      
         
       
          
        </DialogContent>
        <DialogActions>
        <Button onClick={() => {
  handleSave();
  handleClose();
}} color="primary">
  Save
</Button>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
        
        </DialogActions>
      </Dialog>
    </div>
  );
  
}
export default AddPostDialog;

