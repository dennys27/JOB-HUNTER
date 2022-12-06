import { Box, Container, Grid } from '@mui/material';
import React, { useEffect } from 'react'
import JobMenu from './JobMenu/JobMenu';
import Navbar from "../Navbar/Navbar";
import Jobtopbar from './Jobtopbar/Jobtopbar';
import Job from './Job/Job';
import { userRequest } from '../../../Constants/Constants';
import { useState } from 'react';


const Jobs = () => {

  const [jobs, setJobs] = useState([])
  
  useEffect(() => {

    userRequest({

      method: "GET",
      url: "/user/jobs",

    }).then((data) => {
     
       setJobs(data.data)
      
    })
   
 },[])



  return (
    <>
      <Navbar />

      <Box sx={{ backgroundColor: "#D9D9D9", bottom: 0 }}>
        <Container sx={{ paddingBottom: 20 }}>
          <Box
            sx={{ width: "100%" }}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Grid
              sx={{ paddingTop: "80px" }}
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              <Grid
                sx={{
                  display: { xs: "none", sm: "none", md: "flex", lg: "flex" },
                }}
                display={"flex"}
                justifyContent={"center"}
                item
                xs={2}
                sm={4}
                md={3}
              >
                <Box position="fixed">
                  <JobMenu position="sticky" />
                </Box>
              </Grid>

              <Grid item xs={2} sm={4} md={8}>
                <Jobtopbar />
                <Box sx={{ marginTop: 2,minHeight:"700px",maxHeight:"800px" }}>
                  <Grid
                    container
                    spacing={{ xs: 2, sm: 2, md: 3 }}
                    columns={{ xs: 4, sm: 8, md: 12 }}
                    
                  >
                  
                    {jobs?.map((job, index) => (
                      <Grid item xs={2} sm={4} md={4} key={index}>
                        <Job job={job} />
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default Jobs