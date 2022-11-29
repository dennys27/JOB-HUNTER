import React, { useEffect, useState } from 'react'
import { Box, Button, Container, Divider, Grid, Modal, TextField, Typography } from "@mui/material";
import { userRequest } from "../../../../Constants/Constants";
import { RiDeleteBackLine, RiDeleteBackFill } from "react-icons/ri";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import swal from "sweetalert";
import './Experience.css'
import { useLocation } from 'react-router-dom';





const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  height: 500,
  bgcolor: "background.paper",
  boxShadow: 24,
  border: "none",
  outline: "none",
  p: 4,
  borderRadius: "5px",
  overflow: "scroll",
  scrollbarWidth: "none",
};



const ViewExperience = () => {


  const { state } = useLocation();




 
  let exp = {
    title: "",
    employmenttype: "",
    companyname: "",
    companylocation: "",
    startdate: "",
    enddate: "",
    industry:""
  }

  let certificate = {
    name: "",
    issuingorganization: "",
    issuedate: "",
    credentialid: "",
    credentialurl: "",
  }

  let educations = {
    school: "",
    degree: "",
    fieldofstudy: "",
    startdate: "",
    enddate: "",
    description: "",
  }


   useEffect(() => {
    
     userRequest({
       method: "POST",
       url: "/user/getuser",
       data: {
         _id: state.id,
       },
     }).then((data) => {
       console.log(data.data.data, "gggggggggggggg");
       setUser(data.data.data);
      //  setBasic({ ...data.data.data });
     });
   }, []);

   const [user, setUser] = useState({});
  
  
  

   

   const [experience, setExperience] = useState(exp);
   const [certification, setCertification] = useState(certificate);
   const [education, setEducation] = useState(educations);
   const [menu, setMenu] = useState("experience");
  
  const selectMenu = (val) => {
    setMenu(val)
  }
 
   const detailChange = (e) => {
     setExperience({ ...experience, [e.target.name]: e.target.value });
  };
  
   const certificationChange = (e) => {
     setCertification({ ...certification, [e.target.name]: e.target.value });
  };
  
   const educationChange = (e) => {
     setEducation({ ...education, [e.target.name]: e.target.value });
   };


  



  return (
    <Box
      sx={{
        width: "100%",
        height: "400px",
        backgroundColor: "white",
        borderRadius: "5px",
        marginTop: "20px",
        paddingTop: "10px",
      }}
    >
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-around",
          marginBottom: "10px",
        }}
      >
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid
            onClick={() => setMenu("experience")}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            item
            xs={2}
            sm={4}
            md={4}
          >
            <Typography className={`E${menu}`}>Experience</Typography>
          </Grid>
          <Grid
            onClick={() => setMenu("certifications")}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            item
            xs={2}
            sm={4}
            md={4}
          >
            <Typography className={`C${menu}`}>Certifications</Typography>
          </Grid>
          <Grid
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            item
            xs={2}
            sm={4}
            md={4}
          >
            <Typography
              onClick={() => setMenu("education")}
              className={`D${menu}`}
            >
              Education
            </Typography>
          </Grid>
        </Grid>
      
      </Container>
      <Divider />

      {(() => {
        switch (menu) {
          case "experience":
            return (
              <Box
                className="experience"
                sx={{
                  width: "100%",
                  height: "400px",
                  backgroundColor: "white",
                  borderRadius: "5px",
                  marginTop: "5px",
                  paddingTop: "10px",
                  overflow: "scroll",
                }}
              >
                {user?.experience?.map((data) => (
                  <div>
                    <Container
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        marginBottom: "10px",
                        marginTop: "15px",
                        textAlign: "center",
                      }}
                    >
                      <Grid
                        container
                        spacing={{ xs: 2, md: 3 }}
                        columns={{ xs: 4, sm: 8, md: 12 }}
                      >
                        <Grid
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                          item
                          xs={2}
                          sm={4}
                          md={4}
                        >
                          <img
                            style={{
                              width: "50px",
                              height: "50px",
                              borderRadius: "50px",
                            }}
                            src="https://img.lovepik.com/free-png/20220125/lovepik-real-estate-building-logo-png-image_401737177_wh1200.png"
                            alt=""
                          />
                        </Grid>

                        <Grid
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                          item
                          xs={2}
                          sm={4}
                          md={4}
                        >
                          <Box className="companies">
                            <Typography>{data.companyname}</Typography>
                            <Typography>{data.title}</Typography>
                            <Typography>
                              {data.startdate} - {data.enddate}
                            </Typography>
                          </Box>
                        </Grid>
                        <Grid
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: 2,
                          }}
                          item
                          xs={2}
                          sm={4}
                          md={4}
                        >
                          <Box className="companies">
                            <Typography>View Projects</Typography>
                          </Box>
                          
                        </Grid>
                      </Grid>
                    </Container>
                    <Divider />
                  </div>
                ))}
              </Box>
            );
          case "certifications":
            return (
              <Box
                className="experience"
                sx={{
                  width: "100%",
                  height: "400px",
                  backgroundColor: "white",
                  borderRadius: "5px",
                  marginTop: "5px",
                  paddingTop: "10px",
                  overflow: "scroll",
                }}
              >
                {user?.certifications?.map((data) => (
                  <div>
                    <Container
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        marginBottom: "10px",
                        marginTop: "15px",
                        textAlign: "center",
                      }}
                    >
                      <Grid
                        container
                        spacing={{ xs: 2, md: 3 }}
                        columns={{ xs: 4, sm: 8, md: 12 }}
                      >
                        <Grid
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                          item
                          xs={2}
                          sm={4}
                          md={4}
                        >
                          <img
                            style={{
                              width: "50px",
                              height: "50px",
                              borderRadius: "50px",
                            }}
                            src="https://w7.pngwing.com/pngs/259/539/png-transparent-professional-certification-academic-certificate-bank-course-certified-miscellaneous-blue-text.png"
                            alt=""
                          />
                        </Grid>

                        <Grid
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                          item
                          xs={2}
                          sm={4}
                          md={4}
                        >
                          <Box className="companies">
                            <Typography>{data.name}</Typography>
                            <Typography>{data.issuingorganization}</Typography>
                            <Typography>{data.issuedate}</Typography>
                          </Box>
                        </Grid>
                        <Grid
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap:1
                          }}
                          item
                          xs={2}
                          sm={4}
                          md={4}
                        >
                          <Box className="companies">
                            <Typography>View Certificate</Typography>
                          </Box>
                          
                        </Grid>
                      </Grid>
                    </Container>

                    <Divider />
                  </div>
                ))}
              </Box>
            );
          case "education":
            return (
              <Box
                className="experience"
                sx={{
                  width: "100%",
                  height: "400px",
                  backgroundColor: "white",
                  borderRadius: "5px",
                  marginTop: "5px",
                  paddingTop: "10px",
                  overflow: "scroll",
                }}
              >
                {user?.education?.map((data) => (
                  <div>
                    <Container
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        marginBottom: "10px",
                        marginTop: "15px",
                        textAlign: "center",
                      }}
                    >
                      <Grid
                        container
                        spacing={{ xs: 2, md: 3 }}
                        columns={{ xs: 4, sm: 8, md: 12 }}
                      >
                        <Grid
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                          item
                          xs={2}
                          sm={4}
                          md={4}
                        >
                          <img
                            style={{
                              width: "50px",
                              height: "50px",
                              borderRadius: "50px",
                            }}
                            src="https://images-platform.99static.com//trXopfTQ46igT2ZUrzEj-ZQ6aqU=/1764x4026:2764x5026/fit-in/500x500/projects-files/128/12848/1284843/1853a0ff-7d4e-410e-8f09-d7a7c90d36df.jpg"
                            alt=""
                          />
                        </Grid>

                        <Grid
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                          item
                          xs={2}
                          sm={4}
                          md={4}
                        >
                          <Box className="companies">
                            <Typography>{data.school}</Typography>
                            <Typography>{data.degree}</Typography>
                            <Typography>
                              {data.startdate} - {data.enddate}
                            </Typography>
                          </Box>
                        </Grid>
                        <Grid
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap:1
                          }}
                          item
                          xs={2}
                          sm={4}
                          md={4}
                        >
                          <Box className="companies">
                            <Typography>{data.decription}</Typography>
                          </Box>
                          
                        </Grid>
                      </Grid>
                    </Container>
                    <Divider />
                  </div>
                ))}
              </Box>
            );

          default:
            return null;
        }
      })()}




  
      <ToastContainer />
    </Box>
)}


export default ViewExperience;