import { Box, Button, Container, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useRef } from "react";
import { format } from "timeago.js";
import { userRequest } from '../../../Constants/Constants';
import './ChatBox.css'
import InputEmoji from "react-input-emoji";


const ChatBox = ({
  chat,
  currentUser,
  setSendMessage,
  receivedMessage 
}) => {
  const [userData, setUserData] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const handleChange = (newMessage) => {
    setNewMessage(newMessage);
  };

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        userRequest({
          method: "GET",
          url: `/user/getMessages/${chat._id}`,
        }).then((data) => {
          setMessages(data.data);
        });
      } catch (error) {
        console.log(error);
      }
    };

    if (chat !== null) {
      fetchMessages();
    }
  }, [chat]);

  const userId = chat?.members?.find((id) => id !== currentUser);
  useEffect(() => {
    const getUserData = async () => {
      userRequest({
        method: "POST",
        url: `/user/getUser`,
        data: {
          _id: userId,
        },
      })
        .then((data) => {
          setUserData(data.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    if (chat !== null) {
      getUserData();
    }
  }, [chat, currentUser]);



  useEffect(() => {
    scroll.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  

  const handleSend = async (e) => {
    e.preventDefault();
    const message = {
      senderId: currentUser,
      text: newMessage,
      chatId: chat._id,
    };

    const receiverId = chat.members.find((id) => id !== currentUser);
    // send message to socket server
    setSendMessage({ ...message, receiverId });
    // send message to database
    try {
      userRequest({
        method: "POST",
        url: `/user/addMessage`,
        data: {
          message,
        },
      }).then((data) => {
        console.log(data.data, "dggggggggggggddddddddddddd");
        setMessages([...messages, data.data]);
        setNewMessage("");
      });
    } catch {
      console.log("error");
    }
  };

  // Receive Message from parent component
    useEffect(() => {
      console.log("Message Arrived: ", receivedMessage);
      if (receivedMessage !== null && receivedMessage.chatId === chat._id) {
        setMessages([...messages, receivedMessage]);
      }
    }, [receivedMessage]);


  const scroll = useRef();
  const imageRef = useRef();
  return (
    <Box
      sx={{
        maxHeight: "700px",
        minHeight: "500px",
        backgroundColor: "white",
        borderRadius: "5px",
        width: "500px",
        overflow: "scroll",
        overflowStyle: "none",
        scrollbarWidth: "none",
      }}
    >
      <Box
        sx={{
          backgroundColor: "white",
          height: "45px",
          width: "100%",
          borderBottom: "1px solid black",
        }}
      >
        <Container
          sx={{
            display: "flex",
            alignItems: "center",
            height: "100%",
          }}
        >
          <Typography>{userData?.name}</Typography>
        </Container>
      </Box>

      <div style={{ height: "350px", overflow: "flex" }} className="chat-body">
        {messages?.map((message) => (
          <>
            {console.log(message, "im working.....")}
            <div
              ref={scroll}
              className={
                message?.senderId === currentUser
                  ? "message own"
                  : "message2 oth"
              }
            >
              <span>{message?.text}</span>
              <span>{format(message?.createdAt)}</span>
            </div>
          </>
        ))}
      </div>

      <div
        style={{ top: 0, Width: "100%", position: "sticky" }}
        className="chat-sender"
      >
        <div onClick={() => imageRef.current.click()}>+</div>
        <InputEmoji value={newMessage} onChange={handleChange} />
        <Button className="send-button button" onClick={handleSend}>
          Send
        </Button>
        <input
          type="file"
          name=""
          id=""
          style={{ display: "none" }}
          ref={imageRef}
        />
      </div>
    </Box>

    // <>
    //   <div className="ChatBox-container">
    //     {chat ? (
    //       <>
    //         {/* chat-header */}
    //         <div className="chat-header">
    //           <div className="follower">
    //             <div>
    //               <img
    //                 src={
    //                   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGrJtoyNGf47vIoDs4MUbSTGfQBHeGucbfJw&usqp=CAU"
    //                 }
    //                 alt="Profile"
    //                 className="followerImage"
    //                 style={{ width: "50px", height: "50px" }}
    //               />
    //               <div className="name" style={{ fontSize: "0.9rem" }}>
    //                 <span>
    //                   {userData?.firstname} {userData?.lastname}
    //                 </span>
    //               </div>
    //             </div>
    //           </div>
    //           <hr
    //             style={{
    //               width: "95%",
    //               border: "0.1px solid #ececec",
    //               marginTop: "20px",
    //             }}
    //           />
    //         </div>
    //         {/* chat-body */}
    //         <div className="chat-body">
    //           {messages.map((message) => (
    //             <>
    //               <div
    //                 ref={scroll}
    //                 className={
    //                   message.senderId === currentUser
    //                     ? "message own"
    //                     : "message"
    //                 }
    //               >
    //                 <span>{message.text}</span>{" "}
    //                 <span>{format(message.createdAt)}</span>
    //               </div>
    //             </>
    //           ))}
    //         </div>

    //         {/* chat-sender */}
    //         <div className="chat-sender">
    //           <div onClick={() => imageRef.current.click()}>+</div>
    //           <InputEmoji value={newMessage} onChange={handleChange} />
    //           <div className="send-button button" onClick={handleSend}>
    //             Send
    //           </div>
    //           <input
    //             type="file"
    //             name=""
    //             id=""
    //             style={{ display: "none" }}
    //             ref={imageRef}
    //           />
    //         </div>{" "}
    //       </>
    //     ) : (
    //       <span className="chatbox-empty-message">
    //         Tap on a chat to start conversation...
    //       </span>
    //     )}
    //   </div>
    // </>
  );
};


export default ChatBox