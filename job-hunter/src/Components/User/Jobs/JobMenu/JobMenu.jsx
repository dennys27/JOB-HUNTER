import React from 'react'
import { BsFillBookmarkStarFill } from "react-icons/bs";
import {
  MdNotifications,
  MdAssignmentTurnedIn,
  MdSettings,
} from "react-icons/md";
import './JobMenu.css'
const JobMenu = () => {
  return (
    <div className="card_wrapper">
      <div className="card">
        <div className="content_wrapper">
          <div className="impressions">
            <span className="saved" style={{ display: "flex" }}>
              <BsFillBookmarkStarFill size={16} sx={{ marginRight: "10px" }} />
              <span style={{ marginLeft: 10 }}> My Jobs</span>
            </span>
            <span className="saved" style={{ display: "flex" }}>
              <MdNotifications size={20} sx={{ marginRight: "10px" }} />
              <span style={{ marginLeft: 10 }}>Notifications</span>
            </span>
            <span className="saved" style={{ display: "flex" }}>
              <MdAssignmentTurnedIn size={17} sx={{ marginRight: "10px" }} />
              <span style={{ marginLeft: 10 }}>Skill Assesments</span>
            </span>
            <span className="saved" style={{ display: "flex" }}>
              <MdSettings size={17} sx={{ marginRight: "10px" }} />
              <span style={{ marginLeft: 10 }}>Skill Assesments</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobMenu