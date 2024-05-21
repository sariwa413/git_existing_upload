import React from "react";
import { Box, Card, CardContent, Fab } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import UserDialog from "./Dialogs/UserDialog";
import { useDeleteUserMutation } from "../users/userApiSlice";

const UserDesigner = ({ user }) => {
  const [openDialog, setOpenDialog] = React.useState(false);
  const [Delete] = useDeleteUserMutation();

  return (
    <Box mb={2}>
      <Card>
        <CardContent>
          <br />
          <p>{user.firstName + ' ' + user.lastName}</p>
          <p>{user.email}</p>
          <Box display="flex" justifyContent="center">
            <Box>
              <Fab color="secondary" aria-label="edit" size="small" onClick={() => setOpenDialog(true)}>
                <EditIcon />
              </Fab>
              <Fab color="error" aria-label="delete" size="small" onClick={() => Delete(user._id, 'Users')} sx={{ marginLeft: 1 }}>
                <DeleteIcon />
              </Fab>
            </Box>
          </Box>
        </CardContent>
      </Card>
      {openDialog && <UserDialog user={user} />}
    </Box>
  );
};

export default UserDesigner;
