import React, { useState } from 'react'
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Container } from '@mui/material';
import ProfileCard from './Profilecard/ProfileCard';
import CreatePost from './CreatePost/CreatePost';
import RecipeReviewCard from './Post/Post';
import RightCard from './RightCard/RightCard';
import Navbar from '../Navbar/Navbar';
import { userRequest } from '../../../Constants/Constants';
import { useEffect } from 'react';




const Item = styled(Paper)(({ theme }) => ({
 
 
  
 
}));



const Feed = () => {
  
const [posts,setPosts] = useState([])
const [refresh, setRefresh] = useState("");

  useEffect(() => {
    getFeed();
  }, [refresh]);
 
let getFeed = async () => {
  let response = await userRequest({
    method: "GET",
    url: "/user/feed",
  })
  setPosts(response.data.data)

 
};

  return (
    <>
      <Navbar />
      <Box sx={{ backgroundColor: "#D9D9D9", bottom: 0 }}>
        <Container>
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
                  <ProfileCard position="sticky" />
                </Box>
              </Grid>
              <Grid item xs={2} sm={4} md={6}>
                <div>
                  <CreatePost setRefresh={setRefresh} />
                  {posts.map((post) => (
                    <RecipeReviewCard post={post} />
                  ))}
                </div>
              </Grid>
              <Grid
                display={"flex"}
                justifyContent={"center"}
                sx={{
                  display: { xs: "none", sm: "none", md: "none", lg: "flex" },
                }}
                item
                xs={2}
                sm={4}
                md={3}
              >
                <Box position="fixed">
                  <Box position="sticky">
                    <RightCard />
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default Feed