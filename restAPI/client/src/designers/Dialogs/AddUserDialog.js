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
import { useCreateUserMutation } from '../../users/userApiSlice';

 function AddUserDialog({user}) {
    const [Add] = useCreateUserMutation()

  
   
    const [open, setOpen] = React.useState(true);
const [name, setName] = React.useState()
const [userName, setUserName] = React.useState()
const [email, setEmail] = React.useState()
const [address, setAddress] = React.useState()
const [phone, setPhone] = React.useState()
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave=()=>{
    Add({name: name, userName: userName, email: email, address: address, phone: phone})
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
            label="name"
            type="text"
            placeholder = {'enter the name'}
            onChange={(e)=>setName(e.target.value)}
            fullWidth
            
          />

             <TextField
            autoFocus
            margin="dense"
            id="userName"
            label="userName"
            type="text"
            placeholder=  {'enter userName'}
            onChange={(e)=>setUserName(e.target.value)}

            fullWidth
          />
             <TextField
            autoFocus
            margin="dense"
            id="email"
            label="email"
            type="email"
            placeholder=  {'enter email'}
            onChange={(e)=>setEmail(e.target.value)}

            fullWidth
          />
             <TextField
            autoFocus
            margin="dense"
            id="address"
            label="address"
            type="text"
            placeholder=  {'enter address'}
            onChange={(e)=>setAddress(e.target.value)}

            fullWidth
          />
             <TextField
            autoFocus
            margin="dense"
            id="phone"
            label="phone"
            type="text"
            placeholder=  {'enter phone'}
            onChange={(e)=>setPhone(e.target.value)}

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
export default AddUserDialog;

