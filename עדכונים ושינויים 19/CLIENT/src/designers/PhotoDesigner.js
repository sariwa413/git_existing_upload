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
          flexDirection: "column", // Set flex direction to column
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
        <Box sx={{ p: 1 }}>
          <p>{photo.title}</p>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Fab
              color="primary"
              aria-label="edit"
              onClick={(e) => {
                e.stopPropagation();
                setOpenDialog(true);
              }}
              style={{ cursor: "pointer" }}
            >
              <EditIcon />
            </Fab>
            <Fab
              color="error"
              aria-label="delete"
              onClick={(e) => {
                e.stopPropagation();
                Delete(photo._id);
              }}
              style={{ cursor: "pointer" }}
            >
              <DeleteIcon />
            </Fab>
          </Box>
        </Box>
      </Card>
      {openDialog && <PhotoDialog photo={photo} />}
    </>
  );
};

export default PhotoDesigner;
