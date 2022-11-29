import { Box, Collapse, TextField, Typography, useRadioGroup } from '@mui/material';
import { ToastContainer, toast } from "react-toastify";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import React from 'react'
import Modal from "@mui/material/Modal";
import "./LeftCard.css"
import { useState } from 'react';
import { TiDelete } from "react-icons/ti";
import { userRequest } from '../../../../Constants/Constants';
import axios from 'axios' 


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  height:500,
  bgcolor: "background.paper",
  boxShadow: 24,
  border: "none",
  outline:"none",
  p: 4,
  borderRadius: "5px",
  overflow: "scroll",
   scrollbarWidth: "none"
};
const styles = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 700,
  minWidth: 500,
  maxHeight:500,
  minHeight:150,
  bgcolor: "background.paper",
  boxShadow: 24,
  border: "none",
  outline:"none",
  p: 4,
  borderRadius: "5px",
  overflow: "scroll",
  scrollbarWidth: "none"
};



const LeftCard = () => {

  const [user, setUser] = useState({})
  const [image, setImage] = useState();
  const [resume, setResume] = useState();
  const handleOpenTwo = () => setOpenTwo(true);
  const handleCloseTwo = () => setOpenTwo(false);
  const [expanded, setExpanded] = useState(false);

  useState(() => {
    let _id = JSON.parse(localStorage.getItem("user"))?._id 
    userRequest({
      method: "POST",
      url: "/user/getuser",
      data: {
        _id: _id,
      },
    }).then((data) => {
      console.log(data.data.data,);
      setUser(data.data.data)
      setProfile({ ...data.data.data })
      setSkills([...data.data.data.skills])
    })
   
    
  }, [])
  


  
 const notify = () =>
   toast("sucess!", {
     position: "top-right",
     autoClose: 1000,
     hideProgressBar: false,
     closeOnClick: true,
     pauseOnHover: true,
     draggable: true,
     progress: undefined,
     theme: "light",
   });


  let details = {
    name: "",
    headline: "",
    currentPosition: "",
    industry:""
  }


   const [open, setOpen] = React.useState(false);
   const [profile,setProfile] = useState(details)
   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);
   const [skills,setSkills] = useState([])
   const [kill, setKill] = useState("")
  const [openTwo, setOpenTwo] = useState(false);
  
   const detailChange = (e) => {
     setProfile({ ...profile, [e.target.name]: e.target.value });
   };
  
  const addKill = (e) => {
    setKill(e.target.value)
  }

  const addSkill = (e) => {
     setSkills([...skills,kill])
  }
  
  const deleteSkill = (index) => {
    console.log(index,"index...............");
    if (index > -1) {
      
      skills.splice(index, 1);
    }
    setSkills([...skills])
  }

  const submit = () => {
    let userId = JSON.parse(localStorage.getItem("user"))?._id
    const { _id, name } = JSON.parse(localStorage?.getItem("user"));
    const data = new FormData();
    data.append("file", resume);
    console.log(data, "checkinggggg");
    JSON.stringify(profile)
    axios
      .post("http://localhost:5000/user/profilecard", data, {
        params: {
          _id: userId,
          details: [profile],
          skills: skills,
        },
        headers: {
          token: `Bearer ${TOKEN}`,
          "Access-Control-Allow-Origin": "http://localhost:5000",
          "Content-Type": "multipart/form-data",
        },
      })
      .then((data) => {
        console.log(data.data.user[0], "after update");
        if (data.data.status) {
          //setUser(data.data.user[0]);
          // setOpen(false);
          //notify();
        }
      });
  }



  const handleFileChange = (e) => {
      setExpanded(true);
      setImage(e.target.files[0]);
  };

  const handlePdfChange = (e) => {
      
      setResume(e.target.files[0]);
  };


  const TOKEN = JSON.parse(localStorage?.getItem("user"))?.token;

  
  const handleProfile = (e) => {
        const { _id, name } = JSON.parse(localStorage?.getItem("user"));
        const data = new FormData();
        data.append("file", image);

        if (!_id || !name) {
          // setPostError("please fillout the description");
          // setTimeout(() => {
          //   setPostError("");
          // }, 3000);
        } else {
          axios
            .post("http://localhost:5000/user/profilepicture", data, {
              params: {
                name: name,
                userId: _id,
                type:"image",
                date: new Date().toDateString(),
                timeStamp: new Date(),
               
              },
              headers: {
                token: `Bearer ${TOKEN}`,
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "multipart/form-data",
              },
            })
            .then((data) => {
              if (data.status === 200) {
                setUser(data.data.user);
                setOpenTwo(false);
                
              }
            });
        }
  }



  return (
    <div className="card_wrapper">
      <div style={{ backgroundColor: "white" }} className="cardOne">
        <div className="content_wrapper">
          <div className="profile_pic">
            {user?.profile ? (
              <img
                onClick={() => handleOpenTwo()}
                className="avatarOne"
                src={`http://localhost:5000/static/images/${
                  user?.profile[user?.profile.length - 1]
                }`}
                alt="profile"
              />
            ) : (
              <img
                onClick={() => handleOpenTwo()}
                className="avatarOne"
                src="https://static.thenounproject.com/png/3911675-200.png"
                alt="profile"
              />
            )}

            <Typography
              fontSize={13}
              component="h6"
              variant="h6"
              sx={{ fontSize: 17 }}
            >
              {user?.name}
            </Typography>
            <Typography
              fontSize={13}
              component="h6"
              variant="h6"
              className="designationOne"
            >
              {user?.headline}
            </Typography>
          </div>
          <div className="impressionsOne">
            <Typography fontSize={13} component="h6" variant="h6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sem
              ante, vehicula eu ante non, tristique ullamcorper ex. Mauris
              dignissim euismod tortor, id elementum augue porta non.
            </Typography>
          </div>
          <div className="skills">
            <Typography
              fontSize={13}
              component="h6"
              variant="h6"
              style={{ fontWeight: "600", paddingLeft: "15px" }}
            >
              skills
            </Typography>

            <div
              className="flex_skills"
              style={{
                maxHeight: "75px",
                overflow: "scroll",
                scrollbarWidth: "none",
              }}
            >
              {user?.skills?.map((data) => (
                <Typography
                  fontSize={13}
                  component="h6"
                  variant="h6"
                  className="skill"
                >
                  {data}
                </Typography>
              ))}
            </div>

            <Typography
              onClick={() => handleOpen()}
              sx={{
                color: "#01A9C1",
                float: "right",
                fontSize: "13px",
                marginTop: "40px",
                marginRight: "10px",
              }}
            >
              Edit
            </Typography>
          </div>
        </div>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography component="h4" variant="h6">
            Edit profile
          </Typography>
          <Box sx={{ paddingTop: "10px" }}>
            <div style={{ marginTop: "10px" }}>
              <label>
                <Typography>Name</Typography>
              </label>
              <TextField
                onChange={(e) => detailChange(e)}
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
                sx={{ width: "100%" }}
                name="name"
                value={profile?.name}
              />
            </div>
            <div style={{ marginTop: "10px" }}>
              <label>
                <Typography>Headline</Typography>
              </label>
              <TextField
                onChange={(e) => detailChange(e)}
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
                sx={{ width: "100%" }}
                name="headline"
                value={profile?.headline}
              />
            </div>
            <div style={{ marginTop: "10px" }}>
              <label>
                <Typography>Current position</Typography>
              </label>
              <TextField
                onChange={(e) => detailChange(e)}
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
                name="currentposition"
                sx={{ width: "100%" }}
                value={profile?.currentPosition}
              />
            </div>
            <div style={{ marginTop: "10px" }}>
              <label>
                <Typography>Industry</Typography>
              </label>
              <TextField
                onChange={(e) => detailChange(e)}
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
                sx={{ width: "100%" }}
                name="industry"
                value={profile?.industry}
              />
            </div>
            <div style={{ marginTop: "10px" }}>
              <label>
                <Typography>Resume</Typography>
              </label>
              <Button variant="contained" component="label">
                Upload
                <input
                  name="resume"
                  onChange={(e) => handlePdfChange(e)}
                  hidden  
                  type="file"
                  
                />
              </Button>

              {/* <TextField
                onChange={(e) => detailChange(e)}
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
                sx={{ width: "100%" }}
                name="industry"
                value={profile.industry}
              /> */}
            </div>

            <div style={{ marginTop: "10px" }}>
              <label>
                <Typography>Skills</Typography>
              </label>
              <div style={{ width: "100%" }}>
                <TextField
                  onChange={(e) => addKill(e)}
                  id="outlined-basic"
                  variant="outlined"
                  sx={{ width: "50%", height: "80px" }}
                  InputProps={{ sx: { height: 40 } }}
                  value={kill}
                />
                <Button
                  onClick={(e) => addSkill(e)}
                  sx={{ width: "70px", height: "40px", marginLeft: "10px" }}
                  variant="contained"
                >
                  Add
                </Button>
                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    flexWrap: "wrap",
                    width: "70%",
                    maxHeight: "100px",
                    overflow: "scroll",
                    scrollbarWidth: "none",
                  }}
                >
                  {skills.length !== 0
                    ? skills.map((item, index) => (
                        <Typography
                          sx={{
                            padding: "15px",
                            backgroundColor: "gray",
                            padding: "10px",
                            borderRadius: "20px",
                            textAlign: "center",
                            textJustify: "center",
                          }}
                        >
                          {item}
                          <TiDelete onClick={() => deleteSkill(index)} />
                        </Typography>
                      ))
                    : ""}
                </div>
              </div>
            </div>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "end",
                marginTop: "10px",
              }}
            >
              <Button
                sx={{ width: "100px", height: "50px" }}
                variant="contained"
                onClick={(e) => submit(e)}
              >
                Save
              </Button>
            </div>
          </Box>
        </Box>
      </Modal>

      <Modal
        open={openTwo}
        onClose={handleCloseTwo}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styles}>
          <Typography component="h4" variant="h6">
            Edit profile
          </Typography>
          <Box sx={{ paddingTop: "10px" }}>
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

            <div style={{ marginTop: "10px" }}>
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="label"
              >
                <input
                  onChange={(e) => handleFileChange(e)}
                  hidden
                  accept="image/*"
                  type="file"
                />
                <PhotoCamera />
                <Typography sx={{ color: "gray" }}>choose</Typography>
              </IconButton>
            </div>

            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "end",
                marginTop: "10px",
              }}
            >
              <Button
                onClick={() => handleProfile()}
                sx={{ width: "100px", height: "50px" }}
                variant="contained"
              >
                upload
              </Button>
            </div>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}

export default LeftCard