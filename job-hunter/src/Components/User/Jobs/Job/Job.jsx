import { Box, Typography } from '@mui/material'
import "./Job.css"

import React from 'react'

const Job = () => {
  return (
    <>
      <div
        style={{
          width: "200px",
          height: "210px",
          backgroundColor: "white",
          borderRadius: "10px",
          padding: "15px",
          fontFamily: "fantasy",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src="https://cdn.pixabay.com/photo/2017/03/24/07/28/facebook-2170419__340.png"
            alt=""
            style={{ width: "50px", height: "50px",borderRadius:"5px" }}
          />
          <div style={{ padding: "5px", color: "#01A9C1" }}>
            <h4>UI/UX Designer</h4>
            <Typography style={{ color: "gray" }}>Facebook</Typography>
          </div>
        </div>
        <div style={{ paddingTop: "10px", textAlign: "left" }}>
          <Typography
            className="job_desc"
            style={{ overflow: "scroll", maxHeight: "95px" }}
          >
            UI/UX Designer responsibilities include gathering user requirements,
            designing graphic elements and building navigation components.
          </Typography>
          <div style={{ display: "flex", marginTop: 20 }}>
            <div
              style={{
                padding: "3px 14px 3px 14px",
                backgroundColor: "#D9D9D9",
                borderRadius: "4px",
              }}
            >
              <Typography>Full-time</Typography>
            </div>
            <div
              style={{
                padding: "3px 14px 3px 14px",
                backgroundColor: "#D9D9D9",
                borderRadius: "4px",
                marginLeft: "20px",
              }}
            >
              <Typography>wfh</Typography>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Job