import { Box, Container, TextField, Typography } from '@mui/material';
import React from 'react'
import Navbar from "../Navbar/Navbar";

const Jobpost = () => {
    return (
      <>
        <Navbar />

        <Box
          sx={{
            marginTop: "50px",
            backgroundColor: "gray",
            width: "100%",
            height: "auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            
          }}
        >
          <Container sx={{width:"550px",height:"auto",backgroundColor:"white",marginTop:"20px",borderRadius:"5px"}}>
            <Typography>Post a job</Typography>

            <Box sx={{ padding: "20px" }}>
              <TextField
                id="outlined-basic"
                label="Company name"
                            variant="outlined"
                            name='companyname'
                sx={{width:"100%",marginTop:"15px"}}
              />
              <TextField
                id="outlined-basic"
                label="Designation"
                            variant="outlined"
                            name='designation'
                sx={{width:"100%",marginTop:"15px"}}
              />
              <TextField
                id="outlined-basic"
                label="Location"
                            variant="outlined"
                            name='location'
                sx={{width:"100%",marginTop:"15px"}}
              />
              <TextField
                id="outlined-basic"
                label="Job summary"
                            variant="outlined"
                            name="jobsummary"
                sx={{width:"100%",marginTop:"15px"}}
              />
              <TextField
                id="outlined-basic"
                label="Job description"
                            variant="outlined"
                            name='jobdescription'
                sx={{width:"100%",marginTop:"15px"}}
              />
              <TextField
                id="outlined-basic"
                label="Company name"
                variant="outlined"
                sx={{width:"100%",marginTop:"15px"}}
              />
              <TextField
                id="outlined-basic"
                label="Company name"
                variant="outlined"
                sx={{width:"100%",marginTop:"15px"}}
              />
              
            </Box>
          </Container>
        </Box>
      </>
    );
}

export default Jobpost 