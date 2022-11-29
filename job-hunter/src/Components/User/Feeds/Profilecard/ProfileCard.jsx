import React, { useState } from 'react'
import {
  Typography,
} from "@mui/material";
import { BsFillBookmarkStarFill } from "react-icons/bs";
import './ProfileCard.css'
import { useEffect } from 'react';
import { userRequest } from '../../../../Constants/Constants';

const ProfileCard = () => {
  const [user, setUser] = useState({})
  useEffect(() => {
   let data = JSON.parse(localStorage.getItem("user"))?._id;
   if (data) {
     userRequest({
       method: "POST",
       url: "/user/getuser",
       data: {
         _id: data,
       },
     }).then((data) => {
       setUser(data.data.data);
     });
   }
  },[])
  return (
    <div className="card_wrapper">
      <div className="card">
        <div className="content_wrapper">
          <div className="profile_pic">
            {user.profile ? (
              <img
                className="avatar"
                src={`http://localhost:5000/static/images/${
                  user?.profile[user.profile.length - 1]
                }`}
                alt="profile"
              />
            ) : (
              <img
                className="avatar"
                src="https://static.thenounproject.com/png/3911675-200.png"
                alt="profile"
              />
            )}

            <Typography sx={{ fontSize: 17 }}>{ user.name}</Typography>
            <p className="designation">{ user.headline}</p>
          </div>
          <div className="impressions">
            <span>
              <p className="impression">impressions of your post 368</p>
            </span>
            <span>
              <p className="impression">impressions of your post 2679</p>
            </span>
            <span className="saved" style={{ display: "flex" }}>
              <BsFillBookmarkStarFill sx={{ marginRight: "10px" }} />
              <span style={{ marginLeft: 10 }}> Saved items</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard