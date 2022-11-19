import { Box, Collapse, Grid, Modal, Typography } from '@mui/material';
const BasicInfo = () => {
    return (
      <Box
        sx={{
          width: "100%",
          height: "250px",
          backgroundColor: "white",
          borderRadius: "5px",
        }}
      >
        <Grid container>
          <Grid item xs={4} md={4} lg={6}>
            <Box sx={{ padding: 2 }}>
              <Typography
                sx={{ fontSize: "18px", fontWeight: "700" }}
                variant="p"
              >
                Basic Information :
              </Typography>
              <Box>
                <div>
                  <p style={{ color: "gray" }}>Age</p>
                  <p>26 Years</p>
                </div>
                <div>
                  <p style={{ color: "gray" }}>Years of experiance</p>
                  <p>6 Years</p>
                </div>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={4} md={3} lg={6}>
            <Box sx={{ padding: 2 }}>
              <Typography
                sx={{ fontSize: "18px", fontWeight: "700" }}
                variant="p"
              >
                About :
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    );
}

export default BasicInfo