import { Box, Button, Divider, Grid, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react'
import Navbar from '../Navbar/Navbar';


const Connections = () => {
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
                  <Box sx={{textAlign:"center", padding: "20px", textJustify: "auto",display:"block",justifyContent:"center",alignItems:"center" }}>
                    <Typography variant='h6' > Add Your Contacts</Typography>
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
                        marginTop:"20px"
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
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGrJtoyNGf47vIoDs4MUbSTGfQBHeGucbfJw&usqp=CAU"
                      />
                      <Box>
                        <Typography>John Doe</Typography>
                        <Typography>Mern Stack Developer</Typography>
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
                    >
                      Message
                    </Button>
                  </Box>
                  <Divider sx={{ paddingTop: "10px" }} />
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