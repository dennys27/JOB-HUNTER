import { Button, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Navbar from "../../Navbar/Navbar";
import WorkIcon from "@mui/icons-material/Work";
import { BiBuilding, BiTargetLock } from "react-icons/bi";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { userRequest } from "../../../../Constants/Constants";
import { ToastContainer, toast } from "react-toastify";

const JobView = () => {
  const [job, setJob] = useState({});
  const location = useLocation();
  let navigate = useNavigate();

  useEffect(() => {
    setJob(location.state.job);
  }, []);

  const onApply = (id) => {
    let user = JSON.parse(localStorage.getItem("user"));

    if (user.resume === "") {
      toast("please upload your resume!", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      userRequest({
        method: "POST",
        url: "/user/apply",
        data: {
          user: user,
          jobId: id,
        },
      }).then(async (data) => {
        toast("success!", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });

        setTimeout(() => {
          navigate("/jobs");
        }, 1500);
      });
    }
  };

  return (
    <>
      <Navbar />

      <div style={{ width: "100%", backgroundColor: "#D9D9D9" }}>
        <Container sx={{ backgroundColor: "#D9D9D9", paddingBottom: "200px" }}>
          <Grid sx={{ paddingTop: "80px" }} container spacing={2}>
            <Grid
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
              item
              xs={6}
              md={4}
            >
              <Box sx={{ position: "fixed" }}>
                <Box
                  sx={{
                    width: "270px",
                    maxHeight: "470px",
                    minHeight: "350px",
                    backgroundColor: "white",
                    borderRadius: "5px",
                    overflow: "scroll",
                    scrollbarWidth: "none",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "10px",
                      gap: "20px",
                    }}
                  >
                    <Box>
                      <img
                        style={{
                          width: "50px",
                          height: "50px",
                          borderRadius: "50px",
                        }}
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS91VsALLEqPqezZU3QSnGY1tZPlSNl6cBeLw&usqp=CAU"
                      />
                    </Box>

                    <Box sx={{ marginBottom: "10px" }}>
                      <Typography p={0}>Node.js Developer</Typography>
                      <Typography sx={{ fontSize: "14px" }}>
                        Spotify pvt ltd
                      </Typography>
                      <Typography sx={{ fontSize: "13px", color: "gray" }}>
                        Ahammadabad,Gujarat
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "10px",
                      gap: "20px",
                    }}
                  >
                    <Box>
                      <img
                        style={{
                          width: "50px",
                          height: "50px",
                          borderRadius: "50px",
                        }}
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS91VsALLEqPqezZU3QSnGY1tZPlSNl6cBeLw&usqp=CAU"
                      />
                    </Box>

                    <Box sx={{ marginBottom: "10px" }}>
                      <Typography p={0}>Node.js Developer</Typography>
                      <Typography sx={{ fontSize: "14px" }}>
                        Spotify pvt ltd
                      </Typography>
                      <Typography sx={{ fontSize: "13px", color: "gray" }}>
                        Ahammadabad,Gujarat
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "10px",
                      gap: "20px",
                    }}
                  >
                    <Box>
                      <img
                        style={{
                          width: "50px",
                          height: "50px",
                          borderRadius: "50px",
                        }}
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS91VsALLEqPqezZU3QSnGY1tZPlSNl6cBeLw&usqp=CAU"
                      />
                    </Box>

                    <Box sx={{ marginBottom: "10px" }}>
                      <Typography p={0}>Node.js Developer</Typography>
                      <Typography sx={{ fontSize: "14px" }}>
                        Spotify pvt ltd
                      </Typography>
                      <Typography sx={{ fontSize: "13px", color: "gray" }}>
                        Ahammadabad,Gujarat
                      </Typography>
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "10px",
                      gap: "20px",
                    }}
                  >
                    <Box>
                      <img
                        style={{
                          width: "50px",
                          height: "50px",
                          borderRadius: "50px",
                        }}
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS91VsALLEqPqezZU3QSnGY1tZPlSNl6cBeLw&usqp=CAU"
                      />
                    </Box>

                    <Box sx={{ marginBottom: "10px" }}>
                      <Typography p={0}>Node.js Developer</Typography>
                      <Typography sx={{ fontSize: "14px" }}>
                        Spotify pvt ltd
                      </Typography>
                      <Typography sx={{ fontSize: "13px", color: "gray" }}>
                        Ahammadabad,Gujarat
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "10px",
                      gap: "20px",
                    }}
                  >
                    <Box>
                      <img
                        style={{
                          width: "50px",
                          height: "50px",
                          borderRadius: "50px",
                        }}
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS91VsALLEqPqezZU3QSnGY1tZPlSNl6cBeLw&usqp=CAU"
                      />
                    </Box>

                    <Box sx={{ marginBottom: "10px" }}>
                      <Typography p={0}>Node.js Developer</Typography>
                      <Typography sx={{ fontSize: "14px" }}>
                        Spotify pvt ltd
                      </Typography>
                      <Typography sx={{ fontSize: "13px", color: "gray" }}>
                        Ahammadabad,Gujarat
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "10px",
                      gap: "20px",
                    }}
                  >
                    <Box>
                      <img
                        style={{
                          width: "50px",
                          height: "50px",
                          borderRadius: "50px",
                        }}
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS91VsALLEqPqezZU3QSnGY1tZPlSNl6cBeLw&usqp=CAU"
                      />
                    </Box>

                    <Box sx={{ marginBottom: "10px" }}>
                      <Typography p={0}>Node.js Developer</Typography>
                      <Typography sx={{ fontSize: "14px" }}>
                        Spotify pvt ltd
                      </Typography>
                      <Typography sx={{ fontSize: "13px", color: "gray" }}>
                        Ahammadabad,Gujarat
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "10px",
                      gap: "20px",
                    }}
                  >
                    <Box>
                      <img
                        style={{
                          width: "50px",
                          height: "50px",
                          borderRadius: "50px",
                        }}
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS91VsALLEqPqezZU3QSnGY1tZPlSNl6cBeLw&usqp=CAU"
                      />
                    </Box>

                    <Box sx={{ marginBottom: "10px" }}>
                      <Typography p={0}>Node.js Developer</Typography>
                      <Typography sx={{ fontSize: "14px" }}>
                        Spotify pvt ltd
                      </Typography>
                      <Typography sx={{ fontSize: "13px", color: "gray" }}>
                        Ahammadabad,Gujarat
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "10px",
                      gap: "20px",
                    }}
                  >
                    <Box>
                      <img
                        style={{
                          width: "50px",
                          height: "50px",
                          borderRadius: "50px",
                        }}
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS91VsALLEqPqezZU3QSnGY1tZPlSNl6cBeLw&usqp=CAU"
                      />
                    </Box>

                    <Box sx={{ marginBottom: "10px" }}>
                      <Typography p={0}>Node.js Developer</Typography>
                      <Typography sx={{ fontSize: "14px" }}>
                        Spotify pvt ltd
                      </Typography>
                      <Typography sx={{ fontSize: "13px", color: "gray" }}>
                        Ahammadabad,Gujarat
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={6} md={8}>
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
                      {job.designation}
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
                      {job.companyname},{job.location}
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
                      <BiBuilding size={25} />
                      <Typography>51 - 200 employees</Typography>
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
                      sx={{ display: "flex", gap: "10px", marginTop: "30px" }}
                    >
                      <Button
                        onClick={() => onApply(job._id)}
                        sx={{
                          backgroundColor: "#01A9C1",
                          width: "100px",
                          borderRadius: "50px",
                        }}
                        variant="contained"
                      >
                        Apply
                      </Button>
                      <Button
                        sx={{
                          width: "100px",
                          borderRadius: "50px",
                          color: "#01A9C1",
                          borderColor: "#01A9C1",
                        }}
                        variant="outlined"
                      >
                        Save
                      </Button>
                    </Box>
                    <Box sx={{ marginTop: "40px" }}>
                      <Typography>Job description:</Typography>
                      <Typography sx={{ marginTop: "10px" }}>
                        {job.jobdescription}
                      </Typography>
                    </Box>

                    <Box sx={{ marginTop: "40px" }}>
                      <Typography>Job summary:</Typography>
                      <Typography sx={{ marginTop: "10px" }}>
                        {job.jobsummary}
                      </Typography>
                    </Box>
                    <Box sx={{ marginTop: "40px" }}>
                      <Typography>About the company:</Typography>
                      <Typography sx={{ marginTop: "10px" }}>
                        {job.aboutcompany}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
        <ToastContainer />
      </div>
    </>
  );
};

export default JobView;
