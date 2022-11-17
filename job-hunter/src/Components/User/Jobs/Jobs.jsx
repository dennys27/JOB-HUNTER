import { Box, Container, Grid } from '@mui/material';
import React from 'react'
import CreatePost from '../Feeds/CreatePost/CreatePost';
import RecipeReviewCard from '../Feeds/Post/Post';
import JobMenu from './JobMenu/JobMenu';
import RightCard from '../Feeds/RightCard/RightCard';
import Navbar from "../Navbar/Navbar";
import Jobtopbar from './Jobtopbar/Jobtopbar';
import Job from './Job/Job';
const Jobs = () => {
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
                <Box sx={{ marginTop: 2 }}>
                  <Grid
                    container
                    spacing={{ xs: 2, sm: 2, md: 3 }}
                    columns={{ xs: 4, sm: 8, md: 12 }}
                  >
                    {Array.from(Array(6)).map((_, index) => (
                      <Grid item xs={2} sm={4} md={4} key={index}>
                        <Job />
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