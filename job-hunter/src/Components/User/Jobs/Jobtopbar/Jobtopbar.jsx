import { Box } from '@mui/material'
import React from 'react'

const Jobtopbar = () => {
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "space-around" }}>
        <div
          style={{
            backgroundColor: "white",
            padding: "10px 30px 10px 30px",
            borderRadius: "20px",
          }}
        >
          Developer
        </div>
        <div
          style={{
            backgroundColor: "white",
            padding: "10px 30px 10px 30px",
            borderRadius: "20px",
          }}
        >
          Health Care
        </div>
        <div
          style={{
            backgroundColor: "white",
            padding: "10px 30px 10px 30px",
            borderRadius: "20px",
          }}
        >
          Designer
        </div>
        <div
          style={{
            backgroundColor: "white",
            padding: "10px 30px 10px 30px",
            borderRadius: "20px",
          }}
        >
          Marketing
        </div>
        <div
          style={{
            backgroundColor: "white",
            padding: "10px 30px 10px 30px",
            borderRadius: "20px",
          }}
        >
          More...
        </div>
      </Box>
    </>
  );
}

export default Jobtopbar