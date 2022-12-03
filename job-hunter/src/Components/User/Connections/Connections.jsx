import { Box, Button, Divider, Grid, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { userRequest } from '../../../Constants/Constants';
import Navbar from '../Navbar/Navbar';


const Connections = () => {
const navigate = useNavigate()
  const[network,setNetwork] = useState([])
  const User = JSON.parse(localStorage.getItem("user"));
 
  const handleChat = (senderId,recieverId) => {
     userRequest({
       method: "POST",
       url: "/user/chat",
       data: {
         senderId:senderId,
         recieverId: recieverId,
       },
     }).then(() => {
       navigate("/chat")
     })
  }

   useEffect(() => {
     userRequest({
       method: "POST",
       url: "/user/getuser",
       data: {
         _id: User._id,
       }
     }).then((data) => {
       console.log(data.data.data.network, "connetions,,,,,,,,,,,,,,,,,,,,,");
       setNetwork(data.data.data.network);
     });
   }, []);
  
//   const handleMessage = () => {
  
// }
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
                display: "flex",
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
                      textAlign: "center",
                      padding: "20px",
                      textJustify: "auto",
                      display: "block",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography variant="h6"> Add Your Contacts</Typography>
                    <Typography>
                      We’ll periodically import and store your contacts to help
                      you and others connect. You choose who to connect to and
                      who to invite. Learn more
                    </Typography>
                    <Button
                      sx={{
                        borderRadius: "50px",
                        height: "40px",
                        width: "130px",
                        backgroundColor: "#01A9C1",
                        marginTop: "20px",
                      }}
                      variant="contained"
                    >
                      Contact
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={8}>
              <Box>
                <Container
                  sx={{
                    maxHeight: "700px",
                    minHeight: "700px",
                    backgroundColor: "white",
                    borderRadius: "5px",
                  }}
                >
                  {network?.map((data) => (
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
                          {data?.profile.length >=0? 
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
                           : 
                            <img
                              style={{
                                width: "50px",
                                height: "50px",
                                borderRadius: "50px",
                              }}
                              src="https://static.thenounproject.com/png/3911675-200.png"
                            />
                          }
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
                            backgroundColor: "#01A9C1",
                          }}
                          variant="contained"
                          onClick={() => handleChat(User._id, data._id)}
                        >
                          Message
                        </Button>
                      </Box>
                      <Divider sx={{ paddingTop: "10px" }} />
                    </>
                  ))}
                </Container>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
}

export default Connections