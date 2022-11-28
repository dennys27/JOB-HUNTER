import { Box, Typography } from '@mui/material'
import "./Job.css"
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'


const Job = ({ job }) => {
  
  const navigate= useNavigate()
  
  const viewJob = (job) => {
    console.log("yyupdssd")
    navigate("/jobview", { state: { job: job } })
  }

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
            src={`http://localhost:5000/static/images/${job.companylogo}`}
            alt=""
            style={{ width: "50px", height: "50px", borderRadius: "5px" }}
          />
          <div style={{ padding: "5px", color: "#01A9C1" }}>
            <Box
              className="job_desc"
              sx={{ height: "40px", overflow: "scroll" }}
            >
              <h4>{job.designation}</h4>
            </Box>

            <Typography onClick={(e) => viewJob(job)} style={{ color: "gray" }}>
              {job.companyname}
            </Typography>
          </div>
        </div>
        <div style={{ paddingTop: "10px", textAlign: "left" }}>
          <Typography
            className="job_desc"
            style={{ overflow: "scroll", maxHeight: "90px", minHeight: "90px" }}
          >
            {job.jobdescription}
          </Typography>
          <div style={{ display: "flex", marginTop: 10 }}>
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