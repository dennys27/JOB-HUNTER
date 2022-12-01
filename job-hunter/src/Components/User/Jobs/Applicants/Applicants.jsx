import { Button, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Navbar from "../../Navbar/Navbar";
import WorkIcon from "@mui/icons-material/Work";
import { BiBuilding, BiTargetLock } from "react-icons/bi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { userRequest } from "../../../../Constants/Constants";
import Modal from "@mui/material/Modal";




const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  height: 370,
  backgroundColor: "white",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  border: "none",
  outline: "none",
  borderRadius:"5px"
};

const Applicants = () => {

  const navigate = useNavigate()
  
   const handleChat = (senderId, recieverId) => {
     userRequest({
       method: "POST",
       url: "/user/chat",
       data: {
         senderId: senderId,
         recieverId: recieverId,
       },
     }).then(() => {
       navigate("/chat");
     });
   };

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

  let currentUser = JSON.parse(localStorage.getItem("user"))
  
  const [data, setData] = useState({});
  const [jobs, setJobs] = useState([])
  
  useEffect(() => {


      userRequest({
        method: "POST",
        url: "/user/getmyjobs",
        data: {
          userId: currentUser._id,
        },
      }).then(async (data) => {
        setJobs(data.data);
        setData(data.data[0]);
      });
    
    
  }, [])
  

  const handlepdf = (name) => {
    
  }



    return (
      <>
        <Navbar />

        <div style={{ width: "100%", backgroundColor: "#D9D9D9" }}>
          <Container
            sx={{ backgroundColor: "#D9D9D9", paddingBottom: "200px" }}
          >
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
                    }}
                  >
                    {jobs?.map((job) => (
                      <Box
                        onClick={() => setData(job)}
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
                          <Box
                            sx={{
                              height: "25px",
                              overflow: "scroll",
                              scrollbarWidth: "none",
                            }}
                          >
                            <Typography p={0}>{job.designation}</Typography>
                          </Box>

                          <Typography sx={{ fontSize: "14px" }}>
                            {job.companyname}
                          </Typography>
                          <Typography sx={{ fontSize: "13px", color: "gray" }}>
                            {job.location}
                          </Typography>
                        </Box>
                      </Box>
                    ))}
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
                        {data?.designation}
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
                        {data?.companyname},{data?.location}
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
                        <Typography>{data?.applicants?.length}</Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                          marginBottom: "15px",
                        }}
                      >
                        <Typography
                          onClick={handleOpen}
                          sx={{ color: "#01A9C1" }}
                        >
                          View applicants
                        </Typography>
                      </Box>

                      <Box sx={{ marginTop: "40px" }}>
                        <Typography>Job description:</Typography>
                        <Typography sx={{ marginTop: "10px" }}>
                          {data?.jobdescription}
                        </Typography>
                      </Box>

                      {/* <Box sx={{ marginTop: "40px" }}>
                        <Typography>Job summary:</Typography>
                        <Typography sx={{ marginTop: "10px" }}>{ data.jobsummary}</Typography>
                      </Box> */}
                      <Box sx={{ marginTop: "40px" }}>
                        <Typography>About the company:</Typography>
                        <Typography sx={{ marginTop: "10px" }}>
                          {data?.aboutcompany}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Container>
          <ToastContainer />
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Applicants
              </Typography>
              <Box
                sx={{
                  overflow: "scroll",
                  scrollbarWidth: "none",
                  maxHeight: "300px",
                  width: "100%",
                }}
              >
                {data?.applicants?.map((user) => (
                  <Box
                    // onClick={() => setData(job)}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "10px",
                      gap: "20px",
                      width: "100%",
                    }}
                  >
                    <Box>
                      <img
                        style={{
                          width: "50px",
                          height: "50px",
                          borderRadius: "50px",
                        }}
                        src={`http://localhost:5000/static/images/${
                          user?.profile[user.profile.length - 1]
                        }`}
                      />
                    </Box>

                    <Box sx={{ marginBottom: "10px" }}>
                      <Box
                        sx={{
                          height: "25px",
                          overflow: "scroll",
                          scrollbarWidth: "none",
                        }}
                      >
                        <Typography
                          onClick={() =>
                            navigate("/viewprofile", {
                              state: {
                                id: user._id,
                              },
                            })
                          }
                          p={0}
                        >
                          {user.name}
                        </Typography>
                      </Box>

                      <Typography sx={{ fontSize: "14px" }}>
                        {user.headline}
                      </Typography>
                    </Box>
                    {user.profile !== "" ? (
                      <a
                        href={`http://localhost:5000/static/resumes/${user?.resume}`}
                        target="_blank"
                      >
                        <Button
                          sx={{
                            borderRadius: "50px",
                            width: "100px",
                            backgroundColor: "white",
                            color: "black",
                            border: "2px solid #01A9C1",
                            marginLeft: "20px",
                          }}
                          variant="contained"
                        >
                          Resume
                        </Button>
                      </a>
                    ) : (
                      <Button
                        sx={{
                          borderRadius: "50px",

                          width: "100px",
                          backgroundColor: "white",
                          color: "black",
                          border: "2px solid #01A9C1",
                          marginLeft: "20px",
                        }}
                          variant="contained"
                          disabled
                      >
                          Resume
                          
                      </Button>
                    )}

                    <Button
                      // onClick={() => onApply(job._id)}
                      sx={{
                        backgroundColor: "#01A9C1",
                        width: "100px",
                        borderRadius: "50px",
                        marginLeft: "10px",
                      }}
                      variant="contained"
                      onClick={() => handleChat(user._id, currentUser._id)}
                    >
                      Message
                    </Button>
                  </Box>
                ))}
              </Box>
            </Box>
          </Modal>
        </div>
      </>
    );
}

export default Applicants;
