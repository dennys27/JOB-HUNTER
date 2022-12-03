import { Divider, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { userRequest } from '../../../Constants/Constants';

const Conversation = ({ data,currentUserId,online}) => {
    
  const [userData, setUserData] = useState(null);
  const userId = data.members.find((id) => id !== currentUserId);
  
    useEffect(() => {
      
        const getUserData = async () => {
            userRequest({
              method: "POST",
                url: `/user/getUser`,
                data: {
                  _id:userId
              }
            }).then((data) => {
               // console.log(data,"ssssss")
                setUserData(data.data.data)
            })
        }
        getUserData()

    },[])
    
  return (
    <>
      <Box
        sx={{
          padding: "20px",
          textJustify: "auto",
          display: "block",
          justifyContent: "end",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            paddingTop: "5px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: "15px",
            }}
          >
            <img
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50px",
              }}
              src={`http://localhost:5000/static/images/${
                userData?.profile[userData.profile.length - 1]
              }`}
            />
            <Box>
              <Typography>{userData?.name}</Typography>
              {online ? (
                <Typography sx={{ color: "green" }}> online </Typography>
              ) : (
                <Typography sx={{ color: "gray" }}> offline </Typography>
              )}
            </Box>
          </Box>
        </Box>
        <Divider sx={{ marginTop: "15px" }} />
      </Box>
    </>
  );
}

export default Conversation