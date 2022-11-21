import React from 'react'
import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import './Experience.css'





const Experience = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "400px",
        backgroundColor: "white",
        borderRadius: "5px",
        marginTop: "20px",
        paddingTop: "10px",
       
      }}
    >
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-around",
          marginBottom: "10px",
          
        }}
      >
        <Grid
          
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            item
            xs={2}
            sm={4}
            md={4}
          >
            <Typography className="exp">Experience</Typography>
          </Grid>
          <Grid
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            item
            xs={2}
            sm={4}
            md={4}
          >
            <Typography className="exp">Certifications</Typography>
          </Grid>
          <Grid
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            item
            xs={2}
            sm={4}
            md={4}
          >
            <Typography className="exp">Education</Typography>
          </Grid>
        </Grid>
      </Container>
      <Divider />

      <Box
        className="experience"
        sx={{
          width: "100%",
          height: "400px",
          backgroundColor: "white",
          borderRadius: "5px",
          marginTop: "5px",
          paddingTop: "10px",
          overflow: "scroll",
        }}
      >
        <Container
          sx={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "10px",
            marginTop: "15px",
            textAlign: "center",
          }}
        >
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Grid
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              item
              xs={2}
              sm={4}
              md={4}
            >
              <img
                style={{ width: "50px", height: "50px", borderRadius: "50px" }}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF5swya8YyRseD7WxYFr04tG7q-2MkiwNZkQ&usqp=CAU"
                alt=""
              />
            </Grid>

            <Grid
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              item
              xs={2}
              sm={4}
              md={4}
            >
              <Box className="companies">
                <Typography>Spotify</Typography>
                <Typography>FrontEnd Developer</Typography>
                <Typography>2015-2019</Typography>
              </Box>
            </Grid>
            <Grid
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              item
              xs={2}
              sm={4}
              md={4}
            >
              <Box className="companies">
                <Typography>View Projects</Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
        <Divider />
        <Container
          sx={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "10px",
            marginTop: "15px",
            textAlign: "center",
          }}
        >
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Grid
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              item
              xs={2}
              sm={4}
              md={4}
            >
              <img
                style={{ width: "50px", height: "50px", borderRadius: "50px" }}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF5swya8YyRseD7WxYFr04tG7q-2MkiwNZkQ&usqp=CAU"
                alt=""
              />
            </Grid>

            <Grid
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              item
              xs={2}
              sm={4}
              md={4}
            >
              <Box className="companies">
                <Typography>Spotify</Typography>
                <Typography>FrontEnd Developer</Typography>
                <Typography>2015-2019</Typography>
              </Box>
            </Grid>
            <Grid
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              item
              xs={2}
              sm={4}
              md={4}
            >
              <Box className="companies">
                <Typography>View Projects</Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
        <Divider />
        <Container
          sx={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "10px",
            marginTop: "15px",
            textAlign: "center",
          }}
        >
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Grid
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              item
              xs={2}
              sm={4}
              md={4}
            >
              <img
                style={{ width: "50px", height: "50px", borderRadius: "50px" }}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF5swya8YyRseD7WxYFr04tG7q-2MkiwNZkQ&usqp=CAU"
                alt=""
              />
            </Grid>

            <Grid
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              item
              xs={2}
              sm={4}
              md={4}
            >
              <Box className="companies">
                <Typography>Spotify</Typography>
                <Typography>FrontEnd Developer</Typography>
                <Typography>2015-2019</Typography>
              </Box>
            </Grid>
            <Grid
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              item
              xs={2}
              sm={4}
              md={4}
            >
              <Box className="companies">
                <Typography>View Projects</Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
        <Divider />
        <Container
          sx={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "10px",
            marginTop: "15px",
            textAlign: "center",
          }}
        >
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Grid
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              item
              xs={2}
              sm={4}
              md={4}
            >
              <img
                style={{ width: "50px", height: "50px", borderRadius: "50px" }}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF5swya8YyRseD7WxYFr04tG7q-2MkiwNZkQ&usqp=CAU"
                alt=""
              />
            </Grid>

            <Grid
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              item
              xs={2}
              sm={4}
              md={4}
            >
              <Box className="companies">
                <Typography>Spotify</Typography>
                <Typography>FrontEnd Developer</Typography>
                <Typography>2015-2019</Typography>
              </Box>
            </Grid>
            <Grid
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              item
              xs={2}
              sm={4}
              md={4}
            >
              <Box className="companies">
                <Typography>View Projects</Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
        <Divider />
        <Container
          sx={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "10px",
            marginTop: "15px",
            textAlign: "center",
          }}
        >
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Grid
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              item
              xs={2}
              sm={4}
              md={4}
            >
              <img
                style={{ width: "50px", height: "50px", borderRadius: "50px" }}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF5swya8YyRseD7WxYFr04tG7q-2MkiwNZkQ&usqp=CAU"
                alt=""
              />
            </Grid>

            <Grid
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              item
              xs={2}
              sm={4}
              md={4}
            >
              <Box className="companies">
                <Typography>Spotify</Typography>
                <Typography>FrontEnd Developer</Typography>
                <Typography>2015-2019</Typography>
              </Box>
            </Grid>
            <Grid
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              item
              xs={2}
              sm={4}
              md={4}
            >
              <Box className="companies">
                <Typography>View Projects</Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
        <Divider />
        <Container
          sx={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "10px",
            marginTop: "15px",
            textAlign: "center",
          }}
        >
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Grid
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              item
              xs={2}
              sm={4}
              md={4}
            >
              <img
                style={{ width: "50px", height: "50px", borderRadius: "50px" }}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF5swya8YyRseD7WxYFr04tG7q-2MkiwNZkQ&usqp=CAU"
                alt=""
              />
            </Grid>

            <Grid
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              item
              xs={2}
              sm={4}
              md={4}
            >
              <Box className="companies">
                <Typography>Spotify</Typography>
                <Typography>FrontEnd Developer</Typography>
                <Typography>2015-2019</Typography>
              </Box>
            </Grid>
            <Grid
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              item
              xs={2}
              sm={4}
              md={4}
            >
              <Box className="companies">
                <Typography>View Projects</Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
        <Divider />
        
      </Box>
    </Box>
  );
}

export default Experience