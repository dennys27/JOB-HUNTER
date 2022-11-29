import { Box, Collapse, TextField, Typography, useRadioGroup } from '@mui/material';
import { ToastContainer, toast } from "react-toastify";
import Button from "@mui/material/Button";
import React from 'react'

import "./LeftCard.css"
import { useState } from 'react';
import { TiDelete } from "react-icons/ti";

import axios from 'axios' 
import { useLocation } from 'react-router-dom';
import { AdminRequest } from '../../../../Constants/Constants';


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



const ViewLeftCard = () => {
  const { state } = useLocation();
  const [user, setUser] = useState({})

  useState(() => {
    AdminRequest({
      method: "GET",
      url: "/getuser",
      data: {
        _id: state.id,
      },
    }).then((data) => {
      console.log(data.data.data);
      setUser(data.data.data);
      setProfile({ ...data.data.data });
      setSkills([...data.data.data.skills]);
    });
   
    
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
      .get("http://localhost:5000/user/profilecard", {
        params: {
          _id: userId,
          details: [profile],
          skills: skills,
        },
        headers: {
          token: `Bearer ${TOKEN}`,
          "Access-Control-Allow-Origin": "http://localhost:5000",
          "Content-Type": "json/form-data",
        },
      })
      .then((data) => {
        console.log(data.data.user[0],"after update");
        if (data.data.status) {
          setUser(data.data.user[0]); 
          setOpen(false);
          notify()
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

            
          </div>
        </div>
      </div>


    </div>
  );
}

export default ViewLeftCard;