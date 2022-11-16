import { Box, Collapse, Modal, Typography } from '@mui/material';
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import SendIcon from "@mui/icons-material/Send";
import React, { useState } from 'react'
import './CreatePost.css'
import { userRequest,userReq } from '../../../../Constants/Constants';
import axios from 'axios'



const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  minHeight:200,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  border: "none",
  outline: "none",
  borderRadius:2
};

const CreatePost = () => {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [video, setVideo] = useState(false);
  const [image, setImage] = useState();
  const [description, setDescription] = useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
 

 const TOKEN = JSON.parse(localStorage?.getItem("user"))?.token;

   const handleFileChange = (e) => {
     if (e.target.files[0].type == "video/mp4") {
       setVideo(true);
       setExpanded(false);
     } else {
       setExpanded(true);
       setVideo(false);
     }
     setImage(
      e.target.files[0]
     );
   };



  const handleDesc = (e) => {
     setDescription(e.target.value)
    
  }



  const handleSubmit = () => {
     
    const userId = JSON.parse(localStorage?.getItem("user"))?.userId;
    console.log(userId,"fffffffffffffffffff");
     const data = new FormData();
     data.append("file", image);
     console.log(data, "oooo");
     axios
       .post("http://localhost:5000/user/posts", data, {
         params: {
           userId: userId,
           description: description,
           date: new Date().toDateString(),
           timeStamp:new Date()
         },
         headers: {
           token: `Bearer ${TOKEN}`,
           "Access-Control-Allow-Origin": "*",
           "Content-Type": "multipart/form-data",
         },
       })
      
   };

  // const handleSubmit = async () => {
  //   let formData = new FormData();
  //   console.log(image.file,"kkkkkkkkkk");
  //   formData.append("file", image.file);
   
  //   console.log(formData,"form data");
  //   // await userRequest({
  //   //   method: "POST",
  //   //   url: "/user/posts",
  //   //   data: {
  //   //     formdata: formData,
  //   //     description: description,
  //   //   },
  //   // });


    

  // // axios.post(
  // //   "http://localhost:5000/user/posts",
  // //   {
  // //     formData,
  // //     description: description,
  // //   },
  // //   {
  // //     headers: {
  // //       token: `Bearer ${TOKEN}`,

  // //       "Access-Control-Allow-Origin": "*",
  // //       "Content-Type": "multipart/form-data",
  // //     },
  // //   }
  // // );
  // // }

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

          <input
            onClick={() => handleOpen()}
            type="text"
            className="postContent"
            placeholder="whats on your mind..."
          />
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
            <input
              onChange={(e) => handleDesc(e)}
              value={description}
              placeholder="whats on your mind..."
              className="post_description"
            />
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <div
                style={{
                  width: "100%",
                  height: "300px",
                  border: 0,
                  outline: 0,
                }}
              >
                {image ? (
                  <img
                    style={{
                      width: "100%",
                      height: "300px",
                      border: 0,
                      outline: 0,
                      borderRadius: 2,
                    }}
                    src={URL.createObjectURL(image)}
                  />
                ) : (
                  ""
                )}
              </div>
            </Collapse>

            <Collapse in={video} timeout="auto" unmountOnExit>
              {image ?
                  <video width="320" height="240" controls>
                  <source src={URL.createObjectURL(image)} type="video/mp4" />
              </video>:""

              }
            
            </Collapse>

            <Box
              sx={{
                marginTop: 8,
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="label"
              >
                <input
                  name="image"
                  hidden
                  accept="image/*"
                  type="file"
                  onChange={(e) => handleFileChange(e)}
                />
                <PhotoCamera />
              </IconButton>

              <IconButton
                color="primary"
                aria-label="upload picture"
                component="label"
              >
                <input
                  hidden
                  type="file"
                  id="videoFile"
                  accept="video/*"
                  onChange={(e) => handleFileChange(e)}
                />
                <SmartDisplayIcon />
              </IconButton>

              <IconButton
                color="primary"
                aria-label="upload picture"
                component="label"
                onClick={() => handleSubmit()}
              >
                <SendIcon />
              </IconButton>
            </Box>
          </Box>
        </Modal>
      </div>
    </>
  );
}

export default CreatePost