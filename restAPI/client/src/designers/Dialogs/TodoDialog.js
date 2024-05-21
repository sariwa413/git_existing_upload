////הורדתי תעמוד הזה קומפלט מMUIד
import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useSelector } from "react-redux";
import { useUpdateTodoMutation } from '../../todos/todosApiSlice';

 function TodoDialog({todo}) {
    const [Edit] = useUpdateTodoMutation()
    
  
   
    const [open, setOpen] = React.useState(true);
const [title, setTitle] = React.useState(todo.title)
const [tags, setTags] = React.useState(todo.tags)
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave=()=>{
    Edit({_id: todo._id, title: title, tags: tags})
    
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
            id="title"
            label="title"
            type="text"
            defaultValue = {todo.title}
            onChange={(e)=>setTitle(e.target.value)}
            fullWidth
            
          />

             <TextField
            autoFocus
            margin="dense"
            id="tags"
            label="tags"
            type="text"
            defaultValue=  {todo.tags.join(", ")}
            onChange={(e)=>setTags(e.target.value.split(', '))}

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
export default TodoDialog;

