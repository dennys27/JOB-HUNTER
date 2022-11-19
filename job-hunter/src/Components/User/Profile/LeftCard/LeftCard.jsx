import { Typography } from '@mui/material';
import React from 'react'
import "./LeftCard.css"
const LeftCard = () => {
  return (
    <div className="card_wrapper">
      <div className="cardOne">
        <div className="content_wrapper">
          <div className="profile_pic">
            <img
              className="avatarOne"
              src="https://t4.ftcdn.net/jpg/03/83/51/07/360_F_383510773_TMTTEn3zQ6ylTW82Sy7Jjs0Fvq34uLVE.jpg"
              alt="profile"
            />
            <Typography sx={{ fontSize: 17 }}>JOHN DOE</Typography>
            <p className="designationOne">MERNSTACK DEVELOPER</p>
          </div>
          <div className="impressionsOne">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sem
              ante, vehicula eu ante non, tristique ullamcorper ex. Mauris
              dignissim euismod tortor, id elementum augue porta non. In eros
              libero, mollis eu lectus vitae, aliquam lacinia velit
            </p>
          </div>
          <div className="skills">
            <p style={{fontWeight:"600",paddingLeft:"15px"}} >skills</p> 

            <div className="flex_skills">
              <p className="skill">Html</p>
              <p className="skill">Docker</p>
              <p className="skill">Kubernetes</p>
              <p className="skill">Html</p>
              <p className="skill">Html</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftCard