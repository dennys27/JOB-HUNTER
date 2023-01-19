import { Box, Button, Container, Grid, Modal, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'
import Navbar from "../Navbar/Navbar";
import BasicInfo from './BasicInfo/BasicInfo';
import Experience from './Experience/Experience';
import LeftCard from './LeftCard/LeftCard';



const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  height: 500,
  bgcolor: "background.paper",
  boxShadow: 24,
  border: "none",
  outline: "none",
  p: 4,
  borderRadius: "5px",
  overflow: "scroll",
  scrollbarWidth: "none",
};



const Profile = () => {
 
  const [user, setUser] = useState({});
  const [open, setOpen] = useState(false);
  

  const handleOpen = () => { setOpen(true) }
  const handleClose = () => setOpen(false);



  return (
    <>
      <div style={{ backgroundColor: "#D9D9D9", paddingBottom: "100px"}}>
        <Navbar />
        <Container>
          <Box sx={{ flexGrow: 1 }}>
            <Grid sx={{ paddingTop: "80px" }} container spacing={2}>
              <Grid
                sx={{ display: "flex", justifyContent: "center"}}
                item
                xs={12}
                sm={4}
                md={4}
              >
                <Box style={{ position: "fixed" }}>
                  <LeftCard />
                </Box>
              </Grid>
              
              <Grid item xs={12} sm={12} md={8}>
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