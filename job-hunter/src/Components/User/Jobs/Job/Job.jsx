import { Box } from '@mui/material'
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
            src="https://www.freepnglogos.com/uploads/logo-facebook-png/logo-facebook-facebook-png-logo-pic-icons-and-png-backgrounds-19.png"
            alt=""
            style={{ width: "50px", height: "50px" }}
          />
          <div style={{ padding: "5px", color: "#01A9C1" }}>
            <h4>UI/UX Designer</h4>
            <p style={{ color: "gray" }}>Facebook</p>
          </div>
        </div>
        <div style={{ paddingTop: "10px", textAlign: "left" }}>
          <p className='job_desc' style={{ overflow: "scroll", maxHeight: "90px" }}>
            UI/UX Designer responsibilities include gathering user requirements,
            designing graphic elements and building navigation components.
          </p>
          <div style={{ display: "flex", marginTop: 20 }}>
            <div
              style={{
                padding: "3px 14px 3px 14px",
                backgroundColor: "#D9D9D9",
                borderRadius: "4px",
              }}
            >
              <p>Full-time</p>
            </div>
            <div
              style={{
                padding: "3px 14px 3px 14px",
                backgroundColor: "#D9D9D9",
                borderRadius: "4px",
                marginLeft: "20px",
              }}
            >
              <p>wfh</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Job