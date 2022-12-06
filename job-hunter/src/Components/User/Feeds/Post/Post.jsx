import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import { Box, Divider, Grid, Menu, MenuItem, Modal, Paper, TextField } from "@mui/material";
import PostActions from "./PostActions/PostActions";
import { useState,useEffect } from "react";
import SendIcon from "@mui/icons-material/Send";
import { userRequest } from "../../../../Constants/Constants";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "./Post.css"
import { useNavigate } from "react-router-dom";



const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 450,
  height: 270,
  bgcolor: "background.paper",
  boxShadow: 24,
  border: "none",
  outline: "none",
  p: 4,
  borderRadius: "5px",
  overflow: "scroll",
  scrollbarWidth: "none",
};

export default function RecipeReviewCard({ post,setLiked,socket }) {
  const [comments, setComments] = useState("");
  const [expandedComment, setComment] = useState(false);
  const [expanded, setExpanded] = React.useState(false);
  const [openT, setOpenT] = React.useState(false);
  const handleCloseT = () => setOpenT(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
const [liked, setLikes] = useState("");

 


  let navigate = useNavigate()
  let duplicate_comment = [...post.comments];
  duplicate_comment.reverse();


  const user = JSON.parse(localStorage.getItem("user"))?._id
  const name = JSON.parse(localStorage.getItem("user"))?.name
 

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };


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
        name:name,
        comments:comments
      }
    }).then((data) => {
      setComments("")
      setLiked(Math.random() * Math.random());
      handleNotification(1,post.userId)
    })

  }







    const handleOpen = () => setOpenT(true);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
  };
  

const onReport = (autherId,reason,reportedPostId) => {
     userRequest({
       method: "POST",
       url: "/user/reportpost",
       data: {
         currentUser: user,
         autherId:autherId,
         reportedPostId: reportedPostId,
         reason: reason,
       },
     }).then((data) => {
       setOpenT(false);
       alert("success"); 
     });

  };



    const handleNotification = (type, postId) => {
      type === 1 && setLikes(true);
      socket.current.emit("sendNotification", {
        senderName: user,
        receiverName: postId,
        type,
      });
    };
  


  
  


  return (
    <Card
      sx={{
        width: "100%",
        minHeight: "200px",
        maxHeight: "auto",
        marginTop: 3,
        bgcolor: "#ffffff",
      }}
    >
      {post?.userId?.profile ? (
        <CardHeader
          avatar={
            <Avatar
              src={`http://localhost:5000/static/images/${
                post.userId.profile[post.userId.profile.length - 1]
              }`}
              sx={{ bgcolor: red[500] }}
              aria-label="recipe"
              onClick={() =>
                navigate("/viewprofile", {
                  state: {
                    id: post.userId._id,
                  },
                })
              }
            />
          }
          action={
            <IconButton aria-label="settings">
              <div>
                <MoreVertIcon
                  sx={{ float: "right" }}
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                />

                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <MenuItem onClick={handleOpen}>Report</MenuItem>
                  <MenuItem onClick={handleClose}>Remove Connection</MenuItem>
                </Menu>
              </div>
            </IconButton>
          }
          title={post.name}
          subheader={post.date}
        />
      ) : (
        <CardHeader
          avatar={
            <Avatar
              src="https://www.boxymo.ie/news/img/ferrari.jpg"
              sx={{ bgcolor: red[500] }}
              aria-label="recipe"
            />
          }
          action={
            <IconButton aria-label="settings">
              <div>
                <MoreVertIcon
                  sx={{ float: "right" }}
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                />

                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <MenuItem onClick={handleOpen}>Report</MenuItem>
                  <MenuItem onClick={handleClose}>Remove Connection</MenuItem>
                </Menu>
              </div>
            </IconButton>
          }
          title={post.name}
          subheader={post.date}
        />
      )}

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
        socket={socket}
      />
      <Collapse
        className="comment_collapse"
        in={expandedComment}
        sx={{ maxHeight: "370px", overflow: "scroll" }}
        timeout="auto"
        unmountOnExit
      >
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

          {duplicate_comment.map((comment) => (
            <Box style={{ padding: "10px 10px" }}>
              <Grid container wrap="nowrap" spacing={2}>
                <Grid item>
                  {comment.userId.profile ? (
                    <Avatar
                      alt="Remy Sharp"
                      src={`http://localhost:5000/static/images/${
                        comment.userId.profile[
                          comment.userId.profile.length - 1
                        ]
                      }`}
                    />
                  ) : (
                    <Avatar
                      alt="Remy Sharp"
                      src="https://static.thenounproject.com/png/3911675-200.png"
                    />
                  )}
                </Grid>
                <Grid justifyContent="left" item xs zeroMinWidth>
                  <h4 style={{ margin: 0, textAlign: "left" }}>
                    {comment.name}
                  </h4>
                  <p style={{ textAlign: "left" }}>{comment.comment}</p>
                  <p style={{ textAlign: "left", color: "gray" }}>
                    posted 1 minute ago
                  </p>
                </Grid>
              </Grid>
              <Divider variant="fullWidth" style={{ margin: "15px 0" }} />
            </Box>
          ))}
        </div>
      </Collapse>
      <Modal
        open={openT}
        onClose={handleCloseT}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Report
          </Typography>
          <Divider />

          <Typography
            id="modal-modal-description"
            sx={{
              mt: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
            onClick={() =>
              onReport(post?.userId, "Suspecious,spam or fake", post?._id)
            }
          >
            Suspecious,spam or fake
            <ArrowForwardIcon sx={{ paddingLeft: 3, color: "#01A9C1" }} />
          </Typography>

          <Typography
            id="modal-modal-description"
            sx={{
              mt: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
            onClick={() =>
              onReport(
                post?._id,
                " Harrassment or hateful speech.",
                post?.userId._id
              )
            }
          >
            Harrassment or hateful speech.
            <ArrowForwardIcon sx={{ paddingLeft: 3, color: "#01A9C1" }} />
          </Typography>

          <Typography
            id="modal-modal-description"
            sx={{
              mt: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
            onClick={() =>
              onReport( "Violence or physical harm", post?.userId._id)
            }
          >
            Violence or physical harm
            <ArrowForwardIcon sx={{ paddingLeft: 3, color: "#01A9C1" }} />
          </Typography>

          <Typography
            id="modal-modal-description"
            sx={{
              mt: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
            onClick={() =>
              onReport(
                post?._id,
                "Intellectual property infringement or defamation",
                post?.userId._id
              )
            }
          >
            Intellectual property infringement or defamation
            <ArrowForwardIcon sx={{ paddingLeft: 3, color: "#01A9C1" }} />
          </Typography>
        </Box>
      </Modal>
    </Card>
  );
}


