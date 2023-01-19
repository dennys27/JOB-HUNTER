import React, { useState } from "react";
import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import Navbar from "../Navbar/Navbar";
import { userRequest } from "../../../Constants/Constants";
import { useEffect } from "react";



const Requests = () => {

  const [refresh, setRefresh] = useState("")
  const [suggestions, setSuggestions] = useState([])
  const [recomendations, setRecomendations] = useState([])
  const currentUser = JSON.parse(localStorage.getItem("user"))?._id
  const User = JSON.parse(localStorage.getItem("user"))
  
  useEffect(() => {
    userRequest({
      method: "GET",
      url: "/user/getusers",
    }).then((data) => {
      console.log(data.data.data, "yoooooooooo");
      setRecomendations(data.data.data);
    });
  }, [refresh]);

  useEffect(() => {
    userRequest({
      method: "POST",
      url: "/user/getUserRequests",
      data: {
        _id:User._id
      }
    }).then((data) => {
      setSuggestions(data.data);
    });

  }, [refresh])


  
  const handleRequest = (userId,senderId) => {
    userRequest({
      method: "POST",
      url: "/user/request",
      data: {
        userId: userId,
        senderId:senderId
      }
    }).then((data) => {
      setRefresh(Math.random())
      console.log(data,"flutter..........");
    })
  }

  const acceptRequest = (userId,senderId) => {
    userRequest({
      method: "POST",
      url: "/user/acceptRequest",
      data: {
        userId: userId,
        senderId:senderId
      }
    }).then((data) => {
      setRefresh(Math.random())
      console.log(data,"resultttt");
    })
  }

  const rejectRequest = (userId,senderId) => {
    userRequest({
      method: "POST",
      url: "/user/rejectRequest",
      data: {
        userId: userId,
        senderId:senderId
      }
    }).then((data) => {
      setRefresh(Math.random())
     
    })
  }
  
  
  return (
    <>
      <Navbar />
      <div
        style={{
          paddingTop: "90px",
          background: "#D9D9D9",
          paddingBottom: "200px",
        }}
      >
        <Container>
          <Grid container spacing={2}>
            <Grid
              sx={{
                display: { xs: "none", sm: "none", md: "flex", lg: "flex" },
                justifyContent: "center",
              }}
              item
              xs={4}
            >
              <Box sx={{ position: "fixed" }}>
                <Box
                  sx={{
                    width: "270px",
                    height: "350px",
                    backgroundColor: "white",
                    borderRadius: "5px",
                  }}
                >
                  <Box
                    sx={{
                      padding: "20px",
                      textJustify: "auto",
                      display: "block",
                    }}
                  >
                    <Typography variant="h6"> Manage my network</Typography>
                    <Typography>Connections</Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={8}>
              <Box>
                <Box
                  sx={{
                    width: "100%",
                    backgroundColor: "white",
                    minHeight: "100px",
                    maxHeight: "400px",
                    borderRadius: "5px",
                    marginBottom: "30px",
                  }}
                >
                  {/* requests */}
                  <Box>
                    <Container
                      sx={{
                        maxHeight: "500px",
                        minHeight: "90px",
                        backgroundColor: "white",
                        borderRadius: "5px",
                      }}
                    >
                      {suggestions?.requests?.map((data) =>
                        data?._id !== currentUser ? (
                          <>
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                paddingTop: "20px",
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
                                    data?.profile[data.profile.length - 1]
                                  }`}
                                />
                                <Box>
                                  <Typography>{data.name}</Typography>
                                  <Typography>{data.headline}</Typography>
                                </Box>
                              </Box>

                              <Button
                                sx={{
                                  borderRadius: "50px",
                                  height: "40px",
                                  width: "130px",
                                  backgroundColor: "white",
                                  color: "black",
                                  border: "2px solid #01A9C1",
                                  marginLeft: "150px",
                                }}
                                variant="contained"
                                onClick={() =>
                                  rejectRequest(currentUser, data._id)
                                }
                              >
                                Reject
                              </Button>
                              <Button
                                sx={{
                                  borderRadius: "50px",
                                  height: "40px",
                                  width: "130px",
                                  backgroundColor: "#01A9C1",
                                }}
                                variant="contained"
                                onClick={() =>
                                  acceptRequest(currentUser, data._id)
                                }
                              >
                                Accept
                              </Button>
                            </Box>
                            <Divider sx={{ paddingTop: "10px" }} />
                          </>
                        ) : (
                          ""
                        )
                      )}
                    </Container>
                  </Box>
                </Box>

                {/* requests */}

                <Container
                  sx={{
                    maxHeight: "700px",
                    minHeight: "700px",
                    backgroundColor: "white",
                    borderRadius: "5px",
                  }}
                >
                  <Grid
                    container
                    spacing={{ xs: 2, md: 2 }}
                    columns={{ xs: 4, sm: 8, md: 12 }}
                  >
                    {recomendations?.map((data, index) =>
                      data?._id !== currentUser &&
                      User?.network?.includes(data?._id) !== true &&
                      User?.requests?.includes(data?._id) !== true ? (
                        <Grid
                          sx={{ display: "flex", justifyContent: "center" }}
                          item
                          xs={12}
                          sm={6}
                          md={3}
                          key={index}
                        >
                          <Box
                            sx={{
                              width: "160px",
                              height: "180px",
                              backgroundColor: "white",
                              borderRadius: "5px",
                              display: "block",
                              textAlign: "center",
                              padding: "20px",
                              border: "1px solid #D9D9D9",
                              overflow: "hide",
                            }}
                          >
                            {data?.profile[data.profile.length - 1] ? (
                              <img
                                style={{
                                  width: "70px",
                                  height: "70px",
                                  borderRadius: "50px",
                                }}
                                src={`http://localhost:5000/static/images/${
                                  data?.profile[data.profile.length - 1]
                                }`}
                              />
                            ) : (
                              <img
                                style={{
                                  width: "70px",
                                  height: "70px",
                                  borderRadius: "50px",
                                }}
                                src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHn2z7r_YL3GXWi6BJzX5LwtfphQGkUpWWBA&usqp=CAU`}
                              />
                            )}
                            <Typography>{data.name}</Typography>
                            <Typography
                              sx={{
                                fontSize: "14px",
                                display: "flex",
                                minHeight: "40px",
                                maxHeight: "40px",
                                textAlign: "center",
                              }}
                            >
                              {data.headline}
                            </Typography>
                            <Button
                              sx={{
                                borderRadius: "50px",
                                height: "30px",
                                width: "100px",
                                backgroundColor: "#01A9C1",
                                marginTop: "15px",
                              }}
                              variant="contained"
                              onClick={() =>
                                handleRequest(data._id, currentUser)
                              }
                            >
                              Connect
                            </Button>
                          </Box>
                        </Grid>
                      ) : (
                        ""
                      )
                    )}
                  </Grid>
                </Container>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default Requests;
