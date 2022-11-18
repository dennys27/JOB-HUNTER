import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Box, Divider, Grid, Paper, TextField } from "@mui/material";
import PostActions from "./PostActions/PostActions";
import { useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import { userRequest } from "../../../../Constants/Constants";


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
 
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard({ post, setLiked }) {

  const user = JSON.parse(localStorage.getItem("user"))?._id
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const [comments, setComments] = useState("");
  const [expandedComment, setComment] = useState(false);

  const handleExpandComment = () => {
    setComment(!expandedComment);
  };

   const handleComment = (e) => {
     setComments(e.target.value);
   };

  
  const addComment = (userId,postId) => {
     
    userRequest({
      method: "POST",
      url: "/user/comment",
      data: {
        userId: userId,
        postId: postId,
        comments:comments
      }
    }).then((data) => {
      setLiked(Math.random() * Math.random());
    })

  }

  return (
    <Card
      sx={{
        width: "100%",
        minHeight: "200px",
        maxHeight: "auto",
        marginTop: 3,
        bgcolor: "#F4F5F5",
      }}
    >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={post.name}
        subheader={post.date}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {post.description}
        </Typography>
      </CardContent>
      {post.image ? (
        <CardMedia
          component="img"
          height="400"
          image={`http://localhost:5000/static/images/${post.image}`}
          alt="post image"
        />
      ) : (
        ""
      )}
      {post.video ? (
        <CardMedia
          component="video"
          height="400"
          image={`http://localhost:5000/static/images/${post.video}`}
          alt="video"
          controls
        />
      ) : (
        ""
      )}
      <Divider />
      <PostActions
        handleExpandComment={handleExpandComment}
        setLiked={setLiked}
        post={post}
      />
      <Collapse in={expandedComment} timeout="auto" unmountOnExit>
        <div style={{ padding: 14 }} className="App">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TextField
              onChange={(e) => handleComment(e)}
              height={4}
              sx={{ width: "70%", outline: "none", border: "none" }}
              id="standard-basic"
              variant="standard"
              label="Comment"
              value={comments}
            />
            <SendIcon
              onClick={(e) => addComment(user, post._id)}
              sx={{ color: "#01A9C1", padding: 2 }}
            />
          </Box>

          <Box style={{ padding: "40px 20px" }}>
            {post.comments.map((comment) => (
              <Grid container wrap="nowrap" spacing={2}>
                <Grid item>
                  <Avatar
                    alt="Remy Sharp"
                    src="https://i.pinimg.com/originals/49/e3/a4/49e3a4562c511f9efb29b1d72f435d8a.jpg"
                  />
                </Grid>
                <Grid justifyContent="left" item xs zeroMinWidth>
                  <h4 style={{ margin: 0, textAlign: "left" }}>
                    Michel Michel
                  </h4>
                  <p style={{ textAlign: "left" }}>
                   {comment.comment}
                  </p>
                  <p style={{ textAlign: "left", color: "gray" }}>
                    posted 1 minute ago
                  </p>
                </Grid>
                <Divider variant="fullWidth" style={{ margin: "15px 0" }} />
              </Grid>
            ))}
          </Box>
        </div>
      </Collapse>
    </Card>
  );
}


