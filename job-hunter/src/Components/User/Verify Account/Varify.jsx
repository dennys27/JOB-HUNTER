import { Button, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar';
import { authentication } from "./firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { userRequest } from '../../../Constants/Constants';
 


const Varify = () => {
    const navigate = useNavigate()
    const[number,setNumber] = useState("")
    const[otp,setOtp] = useState("")
    const [hide, setHide] = useState(false)
    let currentUser = JSON.parse(localStorage.getItem("user"));


      const generateRecaptcha = () => {
        if (!window.recaptchaVerifier) {
          window.recaptchaVerifier = new RecaptchaVerifier(
            "sign-in-button",
            {
              size: "invisible",
              callback: (response) => {},
            },
            authentication
          );
        }
    };




    const handleVerify = () => {
    
        generateRecaptcha();
        let appVerifier = window.recaptchaVerifier;
        signInWithPhoneNumber(authentication, `+91${number}`, appVerifier)
          .then((confirmationResult) => {
           
              window.confirmationResult = confirmationResult;
              setHide(!hide)
          })
          .catch((error) => {
            // Error; SMS not sent
            // ...
            console.log(error);
          });
    };
    

       const verifyOtp = () => {
        
         if (otp.length === 6) {
           let confirmationResult = window.confirmationResult;
           confirmationResult
             .confirm(otp)
             .then(async (result) => {
               // User signed in successfully.
               const user = result.user;
               if (user) {
                   setNumber("")
                   userRequest({
                     method: "POST",
                     url: "/user/profileverification",
                     data: {
                       userId: currentUser._id,
                     },
                   });

                 navigate("/Home");
               }
             })
             .catch((error) => {
               // User couldn't sign in (bad verification code?)
               // ...
             });
         }
       };
    

    return (
      <>
        <Navbar />
        <Box
          style={{
            paddingTop: "100px",
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            backgroundColor: "#D9D9D9",
            paddingBottom: "200px",
          }}
        >
          <Box
            style={{
              width: "360px",
              height: "450px",
              backgroundColor: "white",
              borderRadius: "5px",
              alignItems: "center",
              padding: "15px",
            }}
          >
            <Box
              sx={{
                display: "block",
                justifyContent: "center",
                width: "100%",
                alignItems: "center",
              }}
            >
              <Typography
                variant="h5"
                component="h6"
                sx={{ textAlign: "center", marginTop: "30px" }}
              >
                Verify
              </Typography>

              <Box sx={{ textAlign: "center" }}>
                <Typography mt={3} variant="h6" fontSize={15}>
                  Lets get your account verified
                </Typography>
                <Typography variant="h6" fontSize={12}>
                  Dont worry its a onetime process
                </Typography>
                <TextField
                  id="outlined-basic"
                  label="Mobile"
                  variant="outlined"
                  onChange={(e) =>{setNumber(e.target.value);} }
                  sx={{ marginTop: "20px" }}
                  value={number}
                />
                <TextField
                  id="outlined-basic"
                  label="Otp"
                  variant="outlined"
                  onChange={(e) => { setOtp(e.target.value) }}
                  sx={{ marginTop: "20px" }}
                  value={otp}
                />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    marginTop: "20px",
                  }}
                >
                  <Box>
                    {hide===true ? (
                      <Button
                     onClick={() => {
                         verifyOtp();
                                     
                        }}
                        variant="contained"
                      >
                        Verify
                      </Button>
                    ) : (
                      <Box>
                         <Button
                             onClick={() => {
                                handleVerify(); 
                                }}
                        variant="contained">Submit</Button>
                      </Box>
                    )}
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </>
    );
}

export default Varify