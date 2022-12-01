import { Box, Button, Collapse, Grid, Modal, TextField, Typography } from '@mui/material';
import { ToastContainer, toast } from "react-toastify";
import { useEffect } from 'react';
import { useState } from 'react';
import { AdminRequest, userRequest } from '../../../../Constants/Constants';
import './BasicInfo.css'
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





const ViewBasicInfo = () => {

   const { state } = useLocation();

  const [user,setUser] = useState({})

  useEffect(() => {

    
     AdminRequest({
       method: "POST",
       url: "/admingetuser",
       data: {
         _id:state.id,
       },
     }).then((data) => {
       console.log(data.data.data, "gggggggggggggg");
       setUser(data.data);
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
  

  
     
     const [basic, setBasic] = useState(details);
  
   
  

  

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
                      {`${user[0]?.age} years`}
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
                      {user[0]?.location}
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
                      {`${user[0]?.yearsofexperience} years`}
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
                      {user[0]?.availability}
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
                <Typography>{user[0]?.about}</Typography>
              </div>
            </Box>
          </Grid>
        </Grid>

        <ToastContainer />
      </Box>
    );
}

export default ViewBasicInfo