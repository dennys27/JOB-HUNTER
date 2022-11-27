import { Button, Divider, Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React, { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { userRequest } from "../../../Constants/Constants";
import ChatBox from "../ChatBox/ChatBox";
import Conversation from "../Conversation/Conversation";
import Navbar from "../Navbar/Navbar";
import { io } from "socket.io-client";

const Chat = () => {
 
  
  const [chat, setChat] = useState([]);
  const [currentChat, setCurrentChat] = useState(null)
  const [onlineUsers, setOnlineUsers] = useState([])
  const [sendMessage, setSendMessage] = useState(null);
  const [receivedMessage, setReceivedMessage] = useState(null);
  const socket = useRef()
  let user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    socket.current = io("http://localhost:5000");
    socket.current.emit("new-user-add",user._id);
    socket.current.on("get-users", (users) => {
      setOnlineUsers(users)
      //console.log(onlineUsers)
    })
  },[])


  let userId = JSON.parse(localStorage.getItem("user"))._id;
  useEffect(() => {
  
    const getChats = () => {

      try {

       userRequest({
         method: "GET",
         url: `/user/chat/${userId}`,
       }).then((data) => {
         setChat(data.data)
       })
        
      } catch (error) {

        console.log(error)

      }
      
    }

    getChats()
    
  }, [userId])
  


  //socket sending msg

    useEffect(() => {
      if (sendMessage !== null) {
        socket.current.emit("send-message", sendMessage);
      }
    }, [sendMessage]);
  
  return (
    <>
      <Navbar />

      <div
        style={{
          paddingTop: "90px",
          background: "#D9D9D9",
          paddingBottom: "900px",
        }}
      >
        <Container>
          <Grid container spacing={2}>
            <Grid
              sx={{
                display: "flex",
                justifyContent: "end",
              }}
              item
              xs={4}
            >
              <Box sx={{ position: "fixed" }}>
                <Box
                  sx={{
                    width: "300px",
                    height: "430px",
                    backgroundColor: "white",
                    borderRadius: "5px",
                  }}
                >
                  <Typography
                    component="h6"
                    sx={{ paddingLeft: "20px", paddingTop: "20px" }}
                  >
                    Chat
                  </Typography>
                  <Divider />

                  {chat?.map((Chat) => ( 
                      
                    <Box onClick={() => setCurrentChat(Chat)}>
                      <Conversation data={Chat} currentUserId={userId} />
                    </Box>
                    
                  ))
                    
                  }
                </Box>
              </Box>
            </Grid>

            {/* chat box */}

            <Grid sx={{ display: "flex" }} item xs={8}>
              <Box sx={{ position: "fixed" }}>
               <ChatBox chat={currentChat} currentUser = {userId} setSendMessage={setSendMessage} />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default Chat;
