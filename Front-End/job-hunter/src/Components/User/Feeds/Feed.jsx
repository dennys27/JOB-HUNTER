import React from 'react'
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Container } from '@mui/material';
import ProfileCard from './Profilecard/ProfileCard';
import CreatePost from './CreatePost/CreatePost';

const Item = styled(Paper)(({ theme }) => ({
 
 
  
 
}));

const Feed = () => {
  return (
    <>
      <Container  sx={{ flexGrow: 1,marginTop:"100px" }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          
            <Grid item xs={2} sm={4} md={3} >
               <ProfileCard/> 
          </Grid>
          
            <Grid item xs={2} sm={4} md={6} >
              <CreatePost/>
          </Grid>
          
            <Grid item xs={2} sm={4} md={3} >
              <Item>xs=2</Item>
            </Grid>
          
        </Grid>
      </Container>
    </>
  );
}

export default Feed