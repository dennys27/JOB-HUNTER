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
  const [skills, setSkills] = useState({})
  const [profile, setProfile] = useState({})

  useState(() => {
    AdminRequest({
      method: "GET",
      url: "/admingetuser",
      data: {
        _id: state.id,
      },
    }).then((data) => {
      console.log(data);
      setUser(data.data.data);
      setProfile({ ...data.data.data });
      setSkills([...data.data.data.skills]);
    });
   
    
  }, [])




  return (
    <div className="card_wrapper">
      <div style={{ backgroundColor: "white" }} className="cardOne">
        <div className="content_wrapper">
          <div className="profile_pic">
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