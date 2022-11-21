import { Box, Typography } from '@mui/material'
import React from 'react'

const Jobtopbar = () => {
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "space-around" }}>
        <Typography
          style={{
            backgroundColor: "white",
            padding: "10px 30px 10px 30px",
            borderRadius: "20px",
          }}
        >
          Developer
        </Typography>
        <Typography
          style={{
            backgroundColor: "white",
            padding: "10px 30px 10px 30px",
            borderRadius: "20px",
          }}
        >
          Health Care
        </Typography>
        <Typography
          style={{
            backgroundColor: "white",
            padding: "10px 30px 10px 30px",
            borderRadius: "20px",
          }}
        >
          Designer
        </Typography>
        <Typography
          style={{
            backgroundColor: "white",
            padding: "10px 30px 10px 30px",
            borderRadius: "20px",
          }}
        >
          Marketing
        </Typography>
        <Typography
          style={{
            backgroundColor: "white",
            padding: "10px 30px 10px 30px",
            borderRadius: "20px",
          }}
        >
          More...
        </Typography>
      </Box>
    </>
  );
}

export default Jobtopbar