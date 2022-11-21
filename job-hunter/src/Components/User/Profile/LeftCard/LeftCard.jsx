import { Typography } from '@mui/material';
import { AiOutlineEdit } from "react-icons/ai";
import React from 'react'
import "./LeftCard.css"
const LeftCard = () => {
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
            <div style={{ width:"100%",alignItem:"end"}} >
            <AiOutlineEdit />

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftCard