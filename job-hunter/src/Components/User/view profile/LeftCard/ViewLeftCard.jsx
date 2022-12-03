import { Box, Collapse, Divider, Menu, MenuItem, TextField, Typography, useRadioGroup } from '@mui/material';
import { ToastContainer, toast } from "react-toastify";
import Button from "@mui/material/Button";
import React from 'react'
import Modal from "@mui/material/Modal";
import "./LeftCard.css"
import { useState } from 'react';
import { userRequest } from '../../../../Constants/Constants'; 
import { useLocation } from 'react-router-dom';
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 450,
  height:270,
  bgcolor: "background.paper",
  boxShadow: 24,
  border: "none",
  outline:"none",
  p: 4,
  borderRadius: "5px",
  overflow: "scroll",
   scrollbarWidth: "none"
};




const ViewLeftCard = () => {
  const { state } = useLocation();
  const [user, setUser] = useState({})



   const [openT, setOpenT] = React.useState(false);
   const handleOpen = () => setOpenT(true);
   const handleCloseT = () => setOpenT(false);
 


  useState(() => {
    userRequest({
      method: "POST",
      url: "/user/getuser",
      data: {
        _id: state.id,
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


  
   const [profile,setProfile] = useState(details)
   
   const [skills,setSkills] = useState([])
   const [kill, setKill] = useState("")
 
  




  const TOKEN = JSON.parse(localStorage?.getItem("user"))?.token;
 const currentUser = JSON.parse(localStorage?.getItem("user"))._id;

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  const onReport = (reportedId,reason) => {


  userRequest({
    method: "POST",
    url: "/user/reportuser",
    data: {
      currentUser: currentUser,
      reportedId: reportedId,
      reason:reason
    },
  }).then((data) => {
    setOpenT(false);
    alert("success")
  })
}




  return (
    <>
      <div className="card_wrapper">
        <div style={{ backgroundColor: "white" }} className="cardOne">
          <div className="content_wrapper">
           

            <div className="profile_pic" onClick={handleClose}>
              {user?.profile ? (
                <img
                  className="avatarOne"
                  src={`http://localhost:5000/static/images/${
                    user?.profile[user?.profile.length - 1]
                  }`}
                  alt="profile"
                />
              ) : (
                <img
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                sem ante, vehicula eu ante non, tristique ullamcorper ex. Mauris
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
            </div>
          </div>
        </div>
      </div>

      <Modal
        open={openT}
        onClose={handleCloseT}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Report
          </Typography>
          <Divider />

          <Typography
            id="modal-modal-description"
            sx={{
              mt: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
            onClick={() => onReport(user?._id, "Suspecious,spam or fake")}
          >
            Suspecious,spam or fake
            <ArrowForwardIcon sx={{ paddingLeft: 3, color: "#01A9C1" }} />
          </Typography>

          <Typography
            id="modal-modal-description"
            sx={{
              mt: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
            onClick={() =>
              onReport(user?._id, " Harrassment or hateful speech.")
            }
          >
            Harrassment or hateful speech.
            <ArrowForwardIcon sx={{ paddingLeft: 3, color: "#01A9C1" }} />
          </Typography>

          <Typography
            id="modal-modal-description"
            sx={{
              mt: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
            onClick={() => onReport(user?._id, "Violence or physical harm")}
          >
            Violence or physical harm
            <ArrowForwardIcon sx={{ paddingLeft: 3, color: "#01A9C1" }} />
          </Typography>

          <Typography
            id="modal-modal-description"
            sx={{
              mt: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
            onClick={() =>
              onReport(
                user?._id,
                "Intellectual property infringement or defamation"
              )
            }
          >
            Intellectual property infringement or defamation
            <ArrowForwardIcon sx={{ paddingLeft: 3, color: "#01A9C1" }} />
          </Typography>
        </Box>
      </Modal>
    </>
  );
}

export default ViewLeftCard;