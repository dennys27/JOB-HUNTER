import { Avatar, Container, Divider, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar';
import { BsFillBookmarkStarFill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import { userRequest } from '../../../Constants/Constants';

const Notifications = () => {
    const navigate = useNavigate()
    let user = JSON.parse(localStorage.getItem("user"))
   const[notification,setNotification] = useState()
    useEffect(() => {
        userRequest({
          method: "POST",
            url: "/user/getuser",
            data: {
              _id:user._id
          }
        }).then((data) => {
            console.log(data.data.data.notifications, "gggggggggg")
            setNotification(data.data.data.notifications);
        })
    },[])
    
  return (
    <Box sx={{ backgroundColor: "#D9D9D9", paddingBottom: "150px" }}>
      <Navbar />
      <Container sx={{ paddingTop: "70px" }}>
        <Grid container spacing={2}>
          <Grid
            sx={{
              display: { xs: "none", sm: "none", md: "flex", lg: "flex" },
            }}
            display={"flex"}
            justifyContent={"center"}
            item
            xs={4}
          >
            <Box
              sx={{
                width: "200px",
                height: "200px",
                backgroundColor: "white",
                borderRadius: "5px",
                textAlign: "center",
                paddingTop: "50px",
              }}
            >
              <Typography>Settings</Typography>
              <Typography>Notifications</Typography>
            </Box>
          </Grid>
          <Grid
            sx={{
              display: { xs: "flex", sm: "flex", md: "flex", lg: "flex" },
            }}
            item
            xs={8}
          >
            <Box
              sx={{
                width: "600px",
                height: "500px",
                borderRadius: "5px",
                backgroundColor: "white",
              }}
            >
              {notification?.map((data) => (
                <Box sx={{ padding: "15px" }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      width: "100%",
                    }}
                  >
                    <Avatar
                      src={`http://localhost:5000/static/images/${
                        data?.userId.profile[data?.userId.profile.length - 1]
                      }`}
                      sx={{ backgroundColor: "blue" }}
                      aria-label="recipe"
                      onClick={() =>
                        navigate("/viewprofile", {
                          state: {
                            id: data?.userId._id,
                          },
                        })
                      }
                    />

                    <Typography fontSize={16}>{data?.userId?.name}</Typography>
                    <Typography fontSize={12} color={"gray"} variant="h6">
                      {data?.content}
                    </Typography>
                  </Box>
                  <Divider sx={{ paddingTop: "15px" }} />
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Notifications