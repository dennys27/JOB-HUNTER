import { Box, Button, Container, TextField, Typography } from '@mui/material';
import { TiDelete } from "react-icons/ti";
import React, { useState } from 'react'
import Navbar from "../Navbar/Navbar";
import axios from "axios"

const Jobpost = () => {

    const [skills, setSkills] = useState([]);
    const [kill, setKill] = useState("");
    const [image, setImage] = useState();
    

    const TOKEN = JSON.parse(localStorage?.getItem("user"))?.token;

    let details = {
       companyname: "",
       designation: "",
       location: "",
       jobsummary: "",
       jobdescription: "",
       aboutcompany: "",
       numberofopenings: "",
    };
    
    const [job, setJob] = useState(details);

    const addSkill = (e) => {
         setSkills([...skills, kill]);
    };
    

      const deleteSkill = (index) => {
        console.log(index, "index...............");
        if (index > -1) {
          skills.splice(index, 1);
        }
        setSkills([...skills]);
    };
    

      const addKill = (e) => {
        setKill(e.target.value);
    };


    const handleFileChange = (e) => {
        setImage(e.target.files[0]);
      };
    

      const handleJob = (e) => {
        const { _id, name } = JSON.parse(localStorage?.getItem("user"));
          const data = new FormData();
          data.append("file", image);
        console.log(data);

        if (!_id || !name) {
          // setPostError("please fillout the description");
          // setTimeout(() => {
          //   setPostError("");
          // }, 3000);
        } else {
          axios
            .post("http://localhost:5000/user/jobpost", data, {
              params: {
                job: job,
                userId: _id,
                skills: skills,
                type: "image",
                date: new Date().toDateString(),
                timeStamp: new Date(),
              },
              headers: {
                token: `Bearer ${TOKEN}`,
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "multipart/form-data",
              },
            })
            .then((data) => {
              
            });
        }
    };
    

       const detailChange = (e) => {
         setJob({ ...job, [e.target.name]: e.target.value });
       };


    return (
      <>
        <Navbar />

        <Box
          sx={{
            marginTop: "50px",
            backgroundColor: "#D9D9D9",
            width: "100%",
            height: "auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Container
            sx={{
              width: "600px",
              height: "auto",
              backgroundColor: "white",
              marginTop: "20px",
              borderRadius: "5px",
              marginBottom: "100px",
              paddingBottom: "40px",
            }}
          >
            <Box sx={{ padding: "20px" }}>
              <Typography component="h2" variant="h6">
                Post a job
              </Typography>
              <TextField
                id="outlined-basic"
                label="Company name"
                variant="outlined"
                            name="companyname"
                            value={job.companyname}
                onChange={(e) => detailChange(e)}
                sx={{ width: "100%", marginTop: "30px" }}
              />
              <TextField
                id="outlined-basic"
                label="Designation"
                variant="outlined"
                            name="designation"
                            value={job.designation}
                sx={{ width: "100%", marginTop: "30px" }}
                onChange={(e) => detailChange(e)}
              />
              <TextField
                id="outlined-basic"
                label="Location"
                variant="outlined"
                            name="location"
                            value={job.location}
                sx={{ width: "100%", marginTop: "30px" }}
                onChange={(e) => detailChange(e)}
              />
              <TextField
                id="outlined-basic"
                label="Job summary"
                variant="outlined"
                            name="jobsummary"
                            value={job.jobsummary}
                sx={{ width: "100%", marginTop: "30px" }}
                onChange={(e) => detailChange(e)}
              />
              <TextField
                id="outlined-basic"
                label="company details"
                variant="outlined"
                            name="aboutcompany"
                            value={job.aboutcompany}
                sx={{ width: "100%", marginTop: "30px" }}
                onChange={(e) => detailChange(e)}
              />
              <TextField
                id="outlined-basic"
                label="Job description"
                variant="outlined"
                            name="jobdescription"
                            value={job.jobdescription}
                sx={{ width: "100%", marginTop: "30px" }}
                onChange={(e) => detailChange(e)}
              />
              <TextField
                id="outlined-basic"
                label="Number of openings"
                variant="outlined"
                name='numberofopenings'
                            sx={{ width: "100%", marginTop: "30px" }}
                            value={job.numberofopenings}
                onChange={(e) => detailChange(e)}
              />

              <Box sx={{ display: "flex", marginTop: "30px" }}>
                <TextField
                  id="outlined-basic"
                  label="Skills"
                  variant="outlined"
                  onChange={(e) => addKill(e)}
                  value={kill}
                  sx={{ width: "70%" }}
                />

                <Button
                  size="medium"
                  sx={{ marginLeft: "20px" }}
                  variant="contained"
                  onClick={(e) => addSkill(e)}
                >
                  Add
                </Button>
              </Box>
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  flexWrap: "wrap",
                  width: "100%",
                  maxHeight: "100px",
                  overflow: "scroll",
                  scrollbarWidth: "none",
                  marginTop: "20px",
                }}
              >
                {skills.length !== 0
                  ? skills.map((item, index) => (
                      <Typography
                        sx={{
                          padding: "15px",
                          backgroundColor: "gray",
                          padding: "10px",
                          borderRadius: "20px",
                          textAlign: "center",
                          textJustify: "center",
                        }}
                      >
                        {item}
                        <TiDelete onClick={() => deleteSkill(index)} />
                      </Typography>
                    ))
                  : ""}
              </div>

              <Box sx={{ marginTop: "20px" }}>
                <Button variant="contained" component="label">
                  Upload logo
                  <input
                    onChange={(e) => handleFileChange(e)}
                    hidden
                    accept="image/*"
                    multiple
                    type="file"
                  />
                </Button>
              </Box>

              <Box sx={{ marginTop: "15px" }}>
                <Button
                  onClick={(e) => handleJob(e)}
                  sx={{ float: "right" }}
                  variant="contained"
                  size="large"
                >
                  Save
                </Button>
              </Box>
            </Box>
          </Container>
        </Box>
      </>
    );
}

export default Jobpost 