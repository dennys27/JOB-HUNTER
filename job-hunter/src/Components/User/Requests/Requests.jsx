import React from 'react'
import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import Navbar from "../Navbar/Navbar";

const Requests = () => {
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
                ></Box>

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
                    {Array.from(Array(6)).map((_, index) => (
                      <Grid
                        sx={{ display: "flex", justifyContent: "center" }}
                        item
                        xs={2}
                        sm={4}
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
                            overflow:"hide"
                            
                          }}
                        >
                          <img
                            style={{
                              width: "70px",
                              height: "70px",
                              borderRadius: "50px",
                            }}
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGrJtoyNGf47vIoDs4MUbSTGfQBHeGucbfJw&usqp=CAU"
                          />
                          <Typography>John Doe</Typography>
                          <Typography sx={{fontSize:"14px",display:"flex"}}>Mern stack developer</Typography>
                          <Button
                            sx={{
                              borderRadius: "50px",
                              height: "30px",
                              width: "100px",
                              backgroundColor: "#01A9C1",
                              marginTop:"15px"
                            }}
                            variant="contained"
                          >
                            Connect
                          </Button>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Container>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
}

export default Requests