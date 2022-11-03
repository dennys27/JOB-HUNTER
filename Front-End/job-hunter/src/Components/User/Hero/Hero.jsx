import { Button, Grid, Typography } from '@mui/material'
import React from 'react'
import './Hero.css'
import heroimage from '../Images/hero image.png'

const Hero = () => {
  return (
    <div className="Hero">
      <Grid container spacing={2}>
        <Grid
          sx={{ display: "flex", justifyContent: "center" }}
          item
          xs={12}
          sm={6}
          lg={6}
        >
          <div className="quote_wrapper">
            <Typography fontSize={66} fontWeight={700} variant="h2">
              Find Your
              <span mt={1} style={{ color: "#01A9C1", paddingLeft: 15 }}>
                Dream
              </span>
              <br /> Job With Us
            </Typography>
            <Typography fontWeight={600} mt={1} color={"#01A9C1"} variant="h4">
              Lets Begin Hunt...
            </Typography>

            <Button sx={{ backgroundColor: "#01A9C1",width:"140px",height:"45px",borderRadius:6,marginTop:2 }}  variant="contained">
              Sign up
            </Button>
          </div>
        </Grid>
        <Grid
          sx={{ display: "flex", justifyContent: "center" }}
          item
          xs={12}
          sm={6}
          lg={6}
        >
          <img src={heroimage} alt="" />
        </Grid>
      </Grid>
    </div>
  );
}

export default Hero