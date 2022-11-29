import { Box, Button, Container, Grid, Modal, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import AdminNavbar from '../AdminNavbar/AdminNavbar';
import ViewBasicInfo from './BasicInfo/ViewBasicInfo';
import ViewExperience from './Experience/ViewExperience';
import ViewLeftCard from './LeftCard/ViewLeftCard';






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



const ViewProfile = () => {
  const { state } = useLocation();
  
  const [user, setUser] = useState({});
  const [open, setOpen] = useState(false);
  

  const handleOpen = () => { setOpen(true) }
  const handleClose = () => setOpen(false);



  return (
    <>
      <div style={{ backgroundColor: "#D9D9D9", paddingBottom: "100px" }}>
        <AdminNavbar />
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
                  <ViewLeftCard />
                </Box>
              </Grid>
              <Grid item xs={6} md={8}>
                <ViewBasicInfo />
                <ViewExperience />
              </Grid>
            </Grid>
          </Box>
        </Container>
      </div>
    </>
  );
}

export default ViewProfile