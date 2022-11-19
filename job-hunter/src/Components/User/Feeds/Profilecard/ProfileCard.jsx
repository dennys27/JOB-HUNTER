import React from 'react'
import {
  Typography,
} from "@mui/material";
import { BsFillBookmarkStarFill } from "react-icons/bs";
import './ProfileCard.css'

const ProfileCard = () => {
  return (
    <div className="card_wrapper">
      <div className="card">
        <div className="content_wrapper">
          <div className="profile_pic">
            <img
              className="avatar"
              src="https://as1.ftcdn.net/v2/jpg/04/37/05/00/1000_F_437050078_pvwb7AcQQZuAvMlQNpTEN6O3iLc1Dxmt.jpg"
              alt="profile"
            />
            <Typography sx={{fontSize:17}} >JOHN DOE</Typography>
            <p className="designation">MERNSTACK DEVELOPER</p>
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