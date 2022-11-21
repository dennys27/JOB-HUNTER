import { Box, TextField, Typography, useRadioGroup } from '@mui/material';
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import React from 'react'
import Modal from "@mui/material/Modal";
import "./LeftCard.css"
import { useState } from 'react';
import { TiDelete } from "react-icons/ti";
import { userRequest } from '../../../../Constants/Constants';



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



const LeftCard = () => {


  let details = {
    name: "",
    headline: "",
    currentposition: "",
    industry:""
  }

   const [open, setOpen] = React.useState(false);
   const [profile,setProfile] = useState(details)
   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);
   const [skills,setSkills] = useState([])
  const [kill, setKill] = useState("")
  
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
    let userId = JSON.parse( localStorage.getItem("user"))?._id
    userRequest({
      method: "POST",
      url: "/user/profilecard",
      data: {
        _id:userId,
        details: profile,
        skills:skills
      },
    });
  }



  return (
    <div className="card_wrapper">
      <div style={{ backgroundColor: "white" }} className="cardOne">
        <div className="content_wrapper">
          <div className="profile_pic">
            <img
              className="avatarOne"
              src="https://t4.ftcdn.net/jpg/03/83/51/07/360_F_383510773_TMTTEn3zQ6ylTW82Sy7Jjs0Fvq34uLVE.jpg"
              alt="profile"
            />
            <Typography
              fontSize={13}
              component="h6"
              variant="h6"
              sx={{ fontSize: 17 }}
            >
              JOHN DOE
            </Typography>
            <Typography
              fontSize={13}
              component="h6"
              variant="h6"
              className="designationOne"
            >
              MERNSTACK DEVELOPER
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

            <div className="flex_skills">
              <Typography
                fontSize={13}
                component="h6"
                variant="h6"
                className="skill"
              >
                Html
              </Typography>
              <Typography
                fontSize={13}
                component="h6"
                variant="h6"
                className="skill"
              >
                Docker
              </Typography>
              <Typography
                fontSize={13}
                component="h6"
                variant="h6"
                className="skill"
              >
                Kubernetes
              </Typography>
              <Typography
                fontSize={13}
                component="h6"
                variant="h6"
                className="skill"
              >
                Html
              </Typography>
              <Typography
                fontSize={13}
                component="h6"
                variant="h6"
                className="skill"
              >
                Html
              </Typography>
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
                value={profile.name}
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
                value={profile.headline}
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
                value={profile.currentposition}
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
                value={profile.industry}
              />
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
    </div>
  );
}

export default LeftCard