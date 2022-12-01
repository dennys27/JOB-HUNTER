import { Button, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import WorkIcon from "@mui/icons-material/Work";
import { BiBuilding, BiTargetLock } from "react-icons/bi";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import AdminNavbar from "../AdminNavbar/AdminNavbar";
import { AdminRequest } from "../../../Constants/Constants";

const AdminJobDetails = () => {
  const [job, setJob] = useState({});

  let navigate = useNavigate();
 const { state } = useLocation();
  useEffect(() => {
      setJob(state.details);
     
  }, []);


  return (
    <>
      <AdminNavbar />

      <div style={{ width: "100%", backgroundColor: "#D9D9D9" }}>
        <Container
          sx={{
            backgroundColor: "#D9D9D9",
            paddingBottom: "200px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Grid sx={{ paddingTop: "80px" }} container spacing={2}>
            <Grid
              item
              xs={6}
              md={12}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Box>
                <Box
                  sx={{
                    width: "700px",
                    backgroundColor: "white",
                    minHeight: "800px",
                    maxHeight: "auto",
                    borderRadius: "5px",
                  }}
                >
                  <Box sx={{ padding: "40px" }}>
                    <Typography
                      variant="h5"
                      component="h6"
                      sx={{ fontWeight: 500 }}
                    >
                      {job?.designation}
                    </Typography>
                    <Typography
                      variant="h6"
                      component="p"
                      sx={{
                        fontSize: "14px",
                        paddingTop: "10px",
                        marginBottom: "15px",
                      }}
                    >
                      {job?.companyname},{job?.location}
                    </Typography>

                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        marginBottom: "15px",
                      }}
                    >
                      <WorkIcon />
                      <Typography>Full time</Typography>
                    </Box>

                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        marginBottom: "15px",
                      }}
                    >
                      <BiTargetLock size={25} />
                      <Typography>Actively recruiting</Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        marginBottom: "15px",
                      }}
                    >
                      <Typography>No.of applicants :</Typography>
                      <Typography>{job?.applicants?.length}</Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        marginBottom: "15px",
                      }}
                    ></Box>

                    <Box sx={{ marginTop: "40px" }}>
                      <Typography>Job description:</Typography>
                      <Typography sx={{ marginTop: "10px" }}>
                        {job?.jobdescription}
                      </Typography>
                    </Box>

                    <Box sx={{ marginTop: "40px" }}>
                        <Typography>Job summary:</Typography>
                        <Typography sx={{ marginTop: "10px" }}>{ job?.jobsummary}</Typography>
                      </Box>
                    <Box sx={{ marginTop: "40px" }}>
                      <Typography>About the company:</Typography>
                      <Typography sx={{ marginTop: "10px" }}>
                        {job?.aboutcompany}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
       
      </div>
    </>
  );
};

export default AdminJobDetails;
