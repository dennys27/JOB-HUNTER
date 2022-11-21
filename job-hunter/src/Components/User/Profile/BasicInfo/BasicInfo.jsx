import { Box, Button, Collapse, Grid, Modal, TextField, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useState } from 'react';
import { userRequest } from '../../../../Constants/Constants';
import './BasicInfo.css'



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





const BasicInfo = () => {

  const [user,setUser] = useState({})

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
       setBasic({ ...data.data.data });
       
     });
    
  },[])
   
  let details = {
    age: "",
    yearsofexperience: "",
    location: "",
    availability: "",
    about:""
  }
  

     const [open, setOpen] = useState(false);
     const handleOpen = () => setOpen(true);
     const handleClose = () => setOpen(false);
     
     const [basic, setBasic] = useState(details);
  
     const detailChange = (e) => {
       setBasic({ ...basic, [e.target.name]: e.target.value });
  };
  


    const submit = () => {
      let userId = JSON.parse(localStorage.getItem("user"))?._id;
      userRequest({
        method: "POST",
        url: "/user/basicinfo",
        data: {
          _id: userId,
          details:basic
          
        },
      }).then((data) => {
        console.log(data.data.user, "basic,,,,,<<<<<<<<<<<<>>>>>>>>>>>");
        // setUser(data.data.user);
      });
    };



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
                variant="h6"
              >
                Basic Information :
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "space-around" }}>
                <div>
                  <div style={{ paddingTop: "10px" }}>
                    <Typography
                      fontSize={14}
                      component="h6"
                      variant="h6"
                      style={{ color: "gray" }}
                    >
                      Age
                    </Typography>
                    <Typography fontSize={13} component="h6" variant="h6">
                    {`${user.age} years`}
                    </Typography>
                  </div>
                  <div style={{ paddingTop: "10px" }}>
                    <Typography
                      fontSize={14}
                      component="h6"
                      variant="h6"
                      style={{ color: "gray" }}
                    >
                      Location
                    </Typography>
                    <Typography fontSize={13} component="h6" variant="h6">
                      {user.location}
                    </Typography>
                  </div>
                </div>

                <div>
                  <div style={{ paddingTop: "10px" }}>
                    <Typography
                      fontSize={14}
                      component="h6"
                      variant="h6"
                      style={{ color: "gray" }}
                    >
                      Years of experiance
                    </Typography>
                    <Typography fontSize={13} component="h6" variant="h6">
                      {`${user.yearsofexperience} years`}
                    </Typography>
                  </div>
                  <div style={{ paddingTop: "10px" }}>
                    <Typography
                      fontSize={14}
                      component="h6"
                      variant="h6"
                      style={{ color: "gray" }}
                    >
                      Availability
                    </Typography>
                    <Typography fontSize={13} component="h6" variant="h6">
                      {user.availability}
                    </Typography>
                  </div>
                </div>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={4} md={3} lg={6}>
            <Box sx={{ padding: 2 }}>
              <Typography
                sx={{ fontSize: "18px", fontWeight: "700" }}
                variant="h6"
              >
                About :
              </Typography>
              <div
                className="about"
                style={{
                  width: "100%",
                  maxHeight: "165px",
                  minHeight: "165px",
                  overflow: "scroll",
                }}
              >
                <Typography>
                {user.about}
                </Typography>
              </div>
            </Box>
            <div style={{ width: "100%" }}>
              <Typography
                sx={{
                  color: "#01A9C1",
                  float: "right",
                  paddingRight: "20px",
                  fontSize: "13px",
                }}
                onClick={(e) => handleOpen()}
              >
                Edit
              </Typography>
            </div>
          </Grid>
        </Grid>

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
                  <Typography>Age</Typography>
                </label>
                <TextField
                  id="outlined-basic"
                  label="Outlined"
                  variant="outlined"
                  sx={{ width: "100%" }}
                  name="age"
                  value={basic.age}
                  onChange={(e) => detailChange(e)}
                />
              </div>
              <div style={{ marginTop: "10px" }}>
                <label>
                  <Typography>Years of Experience</Typography>
                </label>
                <TextField
                  id="outlined-basic"
                  label="Outlined"
                  variant="outlined"
                  sx={{ width: "100%" }}
                  name="yearsofexperience"
                  value={basic.yearsofexperience}
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
                  name="location"
                  sx={{ width: "100%" }}
                  value={basic.location}
                  onChange={(e) => detailChange(e)}
                />
              </div>
              <div style={{ marginTop: "10px" }}>
                <label>
                  <Typography>Availability</Typography>
                </label>
                <TextField
                  id="outlined-basic"
                  label="Outlined"
                  variant="outlined"
                  sx={{ width: "100%" }}
                  name="availability"
                  value={basic.availability}
                  onChange={(e) => detailChange(e)}
                />
              </div>
              <div style={{ marginTop: "10px" }}>
                <label>
                  <Typography>About</Typography>
                </label>
                <TextField
                  id="outlined-basic"
                  label="Outlined"
                  variant="outlined"
                  sx={{ width: "100%" }}
                  name="about"
                  value={basic.about}
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
                  onClick={(e)=>submit(e)}
                >
                  Save
                </Button>
              </div>
            </Box>
          </Box>
        </Modal>
      </Box>
    );
}

export default BasicInfo