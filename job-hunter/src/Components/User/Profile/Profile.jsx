import { Box, Container, Grid } from '@mui/material';
import React from 'react'
import Navbar from "../Navbar/Navbar";
import BasicInfo from './BasicInfo/BasicInfo';
import Experience from './Experience/Experience';
import LeftCard from './LeftCard/LeftCard';
const Profile = () => {
  return (
    <>
      <div style={{ backgroundColor: "#D9D9D9", paddingBottom: "100px" }}>
        <Navbar />
        <Container>
          <Box sx={{ flexGrow: 1 }}>
            <Grid sx={{ paddingTop: "80px" }} container spacing={2}>
              <Grid
                sx={{ display: "flex", justifyContent: "center" }}
                item
                xs={6}
                md={4}
              >
                <Box style={{ position: "fixed" }}>
                  <LeftCard />
                </Box>
              </Grid>
              <Grid item xs={6} md={8}>
                <BasicInfo />
                <Experience />
              </Grid>
            </Grid>
          </Box>
        </Container>
      </div>
    </>
  );
}

export default Profile