import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react'
import AdminNavbar from '../AdminNavbar/AdminNavbar';
import AdminSideBar from '../AdminSideBar/AdminSideBar'

const AdminHome = () => {

  const[menu,setMenu] = useState("")

  return (
    <div>
      <AdminNavbar />
      <Grid sx={{paddingTop:"50px"}} container spacing={2}>
        <Grid item xs={2}>
          <AdminSideBar />
        </Grid>
        <Grid item xs={10}>
          <Box sx={{width:"100%",height:"700px",backgroundColor:"red"}}>

          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default AdminHome