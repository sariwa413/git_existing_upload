import React from "react";
import { Box, Card, CardMedia, Fab } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import PhotoDialog from "./Dialogs/PhotoDialog";
import { useDeletePhotoMutation } from "../photos/photosApiSlice";
const PhotoDesigner = ({ photo }) => {
  const [Delete] = useDeletePhotoMutation();
  const [openDialog, setOpenDialog] = React.useState(false);

  return (
    <>
      <br />
      <Card
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          p: 1,
          mx: 2, // Add margin on the x-axis (horizontal)
        }}
      >
        <CardMedia
          component="img"
          height="300"
          width="400"
          image={photo.imageUrl}
          alt={photo.title}
        />
        <Box sx={{ flex: 1, ml: 1 }}>
          <p>{photo.title}</p>
          <Box sx={{ display: "flex", gap: 1 }}>
            <Fab
              color="secondary"
              aria-label="edit"
              onClick={() => setOpenDialog(true)}
            >
              <EditIcon />
            </Fab>
            <Fab
              color="action"
              aria-label="delete"
              onClick={() => {
                Delete(photo._id);
              }}
            >
              <DeleteIcon />
            </Fab>
          </Box>
        </Box>
      </Card>
      {openDialog ? <PhotoDialog photo={photo} /> : null}
    </>
  );
};

export default PhotoDesigner;
