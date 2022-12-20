import { CardActions, IconButton, Typography } from '@mui/material';
import React, { useRef } from "react";
import { AiOutlineLike } from 'react-icons/ai';
import { BiComment } from 'react-icons/bi';
import { RiShareForwardLine } from 'react-icons/ri';
import { styled } from "@mui/material/styles";
import { userRequest } from '../../../../../Constants/Constants';
import { useState } from 'react';
import { io } from "socket.io-client";



const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",

  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));



const PostActions = ({ post, setLiked, handleExpandComment,socket }) => {
 


  const [expanded, setExpanded] = useState(false);
  const [like, setLike] = useState(false);
  const [likes, setLikes] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"))?._id;

  const handleExpandClick = () => {
    setExpanded(!expanded);
    };
    
   const userId = JSON.parse(localStorage.getItem("user"))?._id;

  const postLikeHandler = (post) => {
    
    // handleNotification(post.userId)
    setLike(() => !like);
    userRequest({
      method: "POST",
      url: "/user/like",
      data: {
        postId: post._id,
        userId: userId,
      },
    }).then((data) => {
      setLiked(Math.random() * Math.random());
      handleNotification(1, post.userId._id);
    });
  };



  //for live notifications

  const handleNotification = (type,postId) => {
    type === 1 && setLikes(true);
    socket.current.emit("sendNotification", {
      senderName: userId,
      receiverName: postId,
      type,
    });
  };



  return (
    <CardActions
      sx={{
        diplay: "flex",
        justifyContent: "space-between",
        verticalAlign: "bottom",
        paddingTop: "2%",
      }}
    >
      <IconButton sx={{ display: "block" }} aria-label="add to favorites">
        {post.likes.includes(user) ? (
          <AiOutlineLike
            onClick={() => {
              postLikeHandler(post);
            }}
            color={"#01A9C1"}
          />
        ) : (
          <AiOutlineLike
            onClick={() => {
              postLikeHandler(post);
            }}
          />
        )}
        <Typography
          mt={0}
          pt={0}
          fontSize={"14px"}
          variant="h6"
        >{`${post.likes.length} likes`}</Typography>
      </IconButton>

      <IconButton
        onClick={() => handleExpandComment()}
        sx={{ display: "block" }}
        aria-label="share"
      >
        <BiComment />
        <Typography 
          mt={0}
          pt={0}
          fontSize={"14px"}
          variant="h6"
        >{`${post.comments.length} comments`}</Typography>
      </IconButton>

      <ExpandMore
        expand={expanded}
        aria-expanded={expanded}
        aria-label="show more"
        sx={{ display: "block" }}
      >
        <RiShareForwardLine />
        <Typography
          mt={0}
          pt={0}
          fontSize={"14px"}
          variant="h6"
        >{`${post.likes.length} shares`}</Typography>
      </ExpandMore>
    </CardActions>
  );
};

export default PostActions