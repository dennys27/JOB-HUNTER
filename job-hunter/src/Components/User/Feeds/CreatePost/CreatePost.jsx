import { Box } from '@mui/material';
import React from 'react'
import './CreatePost.css'

const CreatePost = () => {
  return (
    <>
      <Box className="Create_Post_Wrapper">
        <div className="content_wrapper2">
          <Box display={{ xs: "none", sm: "none",md:"none",lg:"flex" }} >
            <img
              display
              className="avatar2"
              src="https://as1.ftcdn.net/v2/jpg/04/37/05/00/1000_F_437050078_pvwb7AcQQZuAvMlQNpTEN6O3iLc1Dxmt.jpg"
              alt="profile"
            />
          </Box>

          <input type="text" className="postContent" />
        </div>
      </Box>
    </>
  );
}

export default CreatePost