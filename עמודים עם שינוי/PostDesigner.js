import React, { useState } from "react";
import { Card, CardContent, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import PostDialog from "./Dialogs/PostDialog";
import { useDeletePostMutation } from "../posts/postsApiSlice";

const PostDesigner = ({ post }) => {
  const [Delete] = useDeletePostMutation();
  const [openDialog, setOpenDialog] = useState(false);
  const [showBody, setShowBody] = useState(false);

  const toggleBody = () => {
    setShowBody(!showBody);
  };

  return (
    <Card style={{ cursor: "pointer", marginBottom: "8px" }}>
      <CardContent>
        <Typography variant="h6" gutterBottom style={{ fontWeight: "bold" }}>
          {post.title}
        </Typography>
        <Typography variant="body2" color="textSecondary" style={{ textAlign: "center" }}>
          
        </Typography>
        <div style={{ display: "flex", justifyContent: "center", marginTop: "4px" }}>
          <Typography
            variant="body1"
            onClick={toggleBody}
            style={{ cursor: "pointer", color: "#757575" }} // Set color to gray
          >
            {showBody ? "hide post" : "show post"}
          </Typography>
        </div>
        {showBody && (
          <Typography variant="body1" gutterBottom>
            <br></br>
            {post.body}
          </Typography>
        )}
        <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "8px" }}>
          <EditIcon
            color="primary"
            onClick={(e) => {
              e.stopPropagation();
              setOpenDialog(true);
            }}
            style={{ cursor: "pointer", marginRight: "8px" }}
          />
          <DeleteIcon
            color="error"
            onClick={(e) => {
              e.stopPropagation();
              Delete(post._id);
            }}
            style={{ cursor: "pointer" }}
          />
        </div>
      </CardContent>
      {openDialog && <PostDialog post={post} />}
    </Card>
  );
};

export default PostDesigner;
