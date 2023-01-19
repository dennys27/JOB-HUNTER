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
            {userData?.profile ? (
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
            ) : (
              <img
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50px",
                }}
                src="https://static.thenounproject.com/png/3911675-200.png"
              />
            )}

            <Box>
              <Typography
                sx={{ display: { xs: "none", md: "flex", lg: "flex" } }}
              >
                {userData?.name}
              </Typography>
              {online ? (
                <Typography
                  sx={{
                    color: "green",
                    display: { xs: "none", md: "flex", lg: "flex" },
                  }}
                >
                  {" "}
                  online{" "}
                </Typography>
              ) : (
                <Typography
                  sx={{
                    color: "gray",
                    display: { xs: "none", md: "flex", lg: "flex" },
                  }}
                >
                  offline
                </Typography>
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