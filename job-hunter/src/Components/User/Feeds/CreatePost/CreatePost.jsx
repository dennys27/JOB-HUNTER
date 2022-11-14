import { Box, Modal, Typography } from '@mui/material';
import React from 'react'
import './CreatePost.css'



const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  height:450,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  border: "none",
  outline: "none",
  borderRadius:2
};

const CreatePost = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Box className="Create_Post_Wrapper">
        <div className="content_wrapper2">
          <Box display={{ xs: "none", sm: "none", md: "none", lg: "flex" }}>
            <img
              display
              className="avatar2"
              src="https://as1.ftcdn.net/v2/jpg/04/37/05/00/1000_F_437050078_pvwb7AcQQZuAvMlQNpTEN6O3iLc1Dxmt.jpg"
              alt="profile"
            />
          </Box>

          <input onClick={handleOpen} type="text" className="postContent" />
        </div>
      </Box>

      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Create a Post
            </Typography>
             <input placeholder='whats on your mind...' className='post_description' />
          </Box>
        </Modal>
      </div>
    </>
  );
}

export default CreatePost