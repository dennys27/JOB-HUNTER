import React, { useEffect, useState } from 'react'
import { Box, Button, Container, Divider, Grid, Modal, TextField, Typography } from "@mui/material";
import { userRequest } from "../../../../Constants/Constants";
import { RiDeleteBackLine, RiDeleteBackFill } from "react-icons/ri";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import swal from "sweetalert";
import './Experience.css'





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



const Experience = () => {

  const deleteDetail = (uid ,item) => {
    
   swal({
     title: "Are you sure?",
     text: "Once deleted, you will not be able to recover data!",
     icon: "warning",
     buttons: true,
     dangerMode: true,
   }).then((willDelete) => {
     if (willDelete) {
        let userId = JSON.parse(localStorage.getItem("user"))?._id;
       swal("successfully deleted!", {
         icon: "success",
       })
       
        userRequest({
          method: "POST",
          url: "/user/deletedetail",
          data: {
            _id: userId,
           uId: uid,
            item:item
          },
        }).then((data) => {
        
          setUser(data.data.user);
        });
     } else {
       swal("cancelled!");
     }
   });
  }
 
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
     let _id = JSON.parse(localStorage.getItem("user"))?._id;
     userRequest({
       method: "POST",
       url: "/user/getuser",
       data: {
         _id: _id,
       },
     }).then((data) => {
       console.log(data.data.data, "gggggggggggggg");
       setUser(data.data.data);
      //  setBasic({ ...data.data.data });
     });
   }, []);

   const [user, setUser] = useState({});
   const [open, setOpen] = useState(false);
   const [openTwo, setOpenTwo] = useState(false);
   const [openThree, setOpenThree] = useState(false);
  
  const handleOpen = (menu) => { 
    if (menu === "experience") {
       setOpen(true);
    }
     
    if (menu === "certifications") {
       setOpenTwo(true);
    }
     
    if (menu === "education") {
       setOpenThree(true);
    }
     
  }
  

   const handleClose = () => setOpen(false);
   const handleOpenTwo = () => setOpenTwo(true);
   const handleCloseTwo= () => setOpenTwo(false);
   const handleOpenThree = () => setOpenThree(true);
   const handleCloseThree= () => setOpenThree(false); 

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

   const submit = () => {
     let userId = JSON.parse(localStorage.getItem("user"))?._id;
     userRequest({
       method: "POST",
       url: "/user/experience",
       data: {
         _id: userId,
         experience,
       },
     }).then(async (data) => {
       await notify();
       console.log(data.data.user, "basic,,,,,<<<<<<<<<<<<>>>>>>>>>>>");
       setUser(data.data.user);
     });
  };
  
   const submitC = () => {
     let userId = JSON.parse(localStorage.getItem("user"))?._id;
     userRequest({
       method: "POST",
       url: "/user/certifications",
       data: {
         _id: userId,
         certification,
       },
     }).then(async (data) => {
       await notify();
       console.log(data.data.user, "basic,,,,,<<<<<<<<<<<<>>>>>>>>>>>");
       setUser(data.data.user);
     });
  };
  

   const submitE = () => {
     let userId = JSON.parse(localStorage.getItem("user"))?._id;
     userRequest({
       method: "POST",
       url: "/user/education",
       data: {
         _id: userId,
         education,
       },
     }).then(async(data) => {
      await notify()
       console.log(data.data.user, "basic,,,,,<<<<<<<<<<<<>>>>>>>>>>>");
       setUser(data.data.user);
     });
   };



 const notify = () =>
   toast("sucess!", {
     position: "top-right",
     autoClose: 1000,
     hideProgressBar: false,
     closeOnClick: true,
     pauseOnHover: true,
     draggable: true,
     progress: undefined,
     theme: "light",
   });




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
        <Typography
          onClick={(e) => {
            handleOpen(menu);
          }}
          sx={{
            color: "#01A9C1",
            float: "right",
            p: 0,
            fontSize: "13px",
          }}
        >
          Edit
        </Typography>
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
                          <RiDeleteBackFill onClick={() => deleteDetail(data.uId,"experience")} />
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
                          <RiDeleteBackFill
                            onClick={() => deleteDetail(data.uId, "certificate")}
                          />
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
                          <Box className="companies" sx={{maxWidth:"100px",minWidth:"100px",minHeight:"70px",maxHeight:"80px",overflow:"scroll",scrollbarWidth:"none"}}>
                            <Typography>{data.decription}</Typography>
                          </Box>
                          <RiDeleteBackFill
                            onClick={() => deleteDetail(data.uId, "education")}
                          />
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

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography component="h4" variant="h6">
            Edit profile
          </Typography>
          <Box sx={{ paddingTop: "10px" }}>
            <div style={{ marginTop: "10px" }}>
              <label>
                <Typography>Title</Typography>
              </label>
              <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
                sx={{ width: "100%" }}
                name="title"
                value={experience.title}
                onChange={(e) => detailChange(e)}
              />
            </div>
            <div style={{ marginTop: "10px" }}>
              <label>
                <Typography>Employment Type</Typography>
              </label>
              <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
                sx={{ width: "100%" }}
                name="employmenttype"
                value={experience.employmenttype}
                onChange={(e) => detailChange(e)}
              />
            </div>
            <div style={{ marginTop: "10px" }}>
              <label>
                <Typography>Company Name</Typography>
              </label>
              <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
                sx={{ width: "100%" }}
                name="companyname"
                value={experience.companyname}
                onChange={(e) => detailChange(e)}
              />
            </div>
            <div style={{ marginTop: "10px" }}>
              <label>
                <Typography>Location</Typography>
              </label>
              <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
                name="companylocation"
                sx={{ width: "100%" }}
                value={experience.companylocation}
                onChange={(e) => detailChange(e)}
              />
            </div>
            <div style={{ marginTop: "10px" }}>
              <label>
                <Typography>Start date</Typography>
              </label>
              <TextField
                type="date"
                id="outlined-basic"
                variant="outlined"
                sx={{ width: "100%" }}
                name="startdate"
                value={experience.startdate}
                onChange={(e) => detailChange(e)}
              />
            </div>
            <div style={{ marginTop: "10px" }}>
              <label>
                <Typography>End date</Typography>
              </label>
              <TextField
                type="date"
                id="outlined-basic"
                variant="outlined"
                sx={{ width: "100%" }}
                name="enddate"
                value={experience.enddate}
                onChange={(e) => detailChange(e)}
              />
            </div>
            <div style={{ marginTop: "10px" }}>
              <label>
                <Typography>Industry</Typography>
              </label>
              <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
                sx={{ width: "100%" }}
                name="industry"
                value={experience.industry}
                onChange={(e) => detailChange(e)}
              />
            </div>

            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "end",
                marginTop: "10px",
              }}
            >
              <Button
                sx={{ width: "100px", height: "50px" }}
                variant="contained"
                onClick={(e) => submit(e)}
              >
                Save
              </Button>
            </div>
          </Box>
        </Box>
      </Modal>

      <Modal
        open={openTwo}
        onClose={handleCloseTwo}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography component="h4" variant="h6">
            Edit profile
          </Typography>
          <Box sx={{ paddingTop: "10px" }}>
            <div style={{ marginTop: "10px" }}>
              <label>
                <Typography>Name</Typography>
              </label>
              <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
                sx={{ width: "100%" }}
                name="name"
                value={certification.name}
                onChange={(e) => certificationChange(e)}
              />
            </div>
            <div style={{ marginTop: "10px" }}>
              <label>
                <Typography>Issuing organization</Typography>
              </label>
              <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
                sx={{ width: "100%" }}
                name="issuingorganization"
                value={certification.issuingorganization}
                onChange={(e) => certificationChange(e)}
              />
            </div>
            <div style={{ marginTop: "10px" }}>
              <label>
                <Typography>Issue date</Typography>
              </label>
              <TextField
                type="date"
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
                sx={{ width: "100%" }}
                name="issuedate"
                value={certification.issuedate}
                onChange={(e) => certificationChange(e)}
              />
            </div>
            <div style={{ marginTop: "10px" }}>
              <label>
                <Typography>Credential Id</Typography>
              </label>
              <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
                name="credentialid"
                sx={{ width: "100%" }}
                value={certification.credentialid}
                onChange={(e) => certificationChange(e)}
              />
            </div>
            <div style={{ marginTop: "10px" }}>
              <label>
                <Typography>Credential url</Typography>
              </label>
              <TextField
                id="outlined-basic"
                variant="outlined"
                sx={{ width: "100%" }}
                name="credentialurl"
                value={certification.credentialurl}
                onChange={(e) => certificationChange(e)}
              />
            </div>

            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "end",
                marginTop: "10px",
              }}
            >
              <Button
                sx={{ width: "100px", height: "50px" }}
                variant="contained"
                onClick={(e) => submitC(e)}
              >
                Save
              </Button>
            </div>
          </Box>
        </Box>
      </Modal>

      <Modal
        open={openThree}
        onClose={handleCloseThree}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography component="h4" variant="h6">
            Edit profile
          </Typography>
          <Box sx={{ paddingTop: "10px" }}>
            <div style={{ marginTop: "10px" }}>
              <label>
                <Typography>School</Typography>
              </label>
              <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
                sx={{ width: "100%" }}
                name="school"
                value={education.school}
                onChange={(e) => educationChange(e)}
              />
            </div>
            <div style={{ marginTop: "10px" }}>
              <label>
                <Typography>Degree</Typography>
              </label>
              <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
                sx={{ width: "100%" }}
                name="degree"
                value={education.degree}
                onChange={(e) => educationChange(e)}
              />
            </div>
            <div style={{ marginTop: "10px" }}>
              <label>
                <Typography>Field of study</Typography>
              </label>
              <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
                sx={{ width: "100%" }}
                name="fieldofstudy"
                value={education.fieldofstudy}
                onChange={(e) => educationChange(e)}
              />
            </div>
            <div style={{ marginTop: "10px" }}>
              <label>
                <Typography>Start date</Typography>
              </label>
              <TextField
                type="date"
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
                name="startdate"
                sx={{ width: "100%" }}
                value={education.startdate}
                onChange={(e) => educationChange(e)}
              />
            </div>
            <div style={{ marginTop: "10px" }}>
              <label>
                <Typography>End date</Typography>
              </label>
              <TextField
                type="date"
                id="outlined-basic"
                variant="outlined"
                sx={{ width: "100%" }}
                name="enddate"
                value={education.enddate}
                onChange={(e) => educationChange(e)}
              />
            </div>
            <div style={{ marginTop: "10px" }}>
              <label>
                <Typography>Description</Typography>
              </label>
              <TextField
                
                id="outlined-basic"
                variant="outlined"
                sx={{ width: "100%" }}
                name="description"
                value={education.description}
                onChange={(e) => educationChange(e)}
              />
            </div>

            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "end",
                marginTop: "10px",
              }}
            >
              <Button
                sx={{ width: "100px", height: "50px" }}
                variant="contained"
                onClick={(e) => submitE(e)}
              >
                Save
              </Button>
            </div>
          </Box>
        </Box>
      </Modal>
      <ToastContainer />
    </Box>
  );
}

export default Experience