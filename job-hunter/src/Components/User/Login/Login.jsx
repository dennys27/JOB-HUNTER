import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../../features/Auth/AuthSlice";
import { Link, Navigate, useNavigate } from "react-router-dom";
import validate from "neo-form-validations";
import "./Login.css";
import { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import { Box, Button, Collapse, Modal, TextField, Typography } from "@mui/material";
import { userRequest } from "../../../Constants/Constants";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  border: "none",
  outline: "none",
  borderRadius:1.5
};



const Login = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errorData, setErrorData] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [forgotEmail, setForgotEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [forgot, setForgot] = useState("");
  const [confirm, setConfirm] = useState("");

   

  const { user,  isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

 

  let localUser = localStorage.getItem("user");

  const onChangeHandler = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onforgot = async () => {
    if (validate.isEmail(forgot)) {
       const response = await userRequest({
         method: "POST",
         url: "/user/forgotpassword",
         data: { email: forgot },
       });
       if (response.data.status) {
         console.log(response.data, "ggggggggggggg");
         handleExpandClick();
       } else {
         setForgotEmail("account doesnot exist");
         setTimeout(() => {
           setForgotEmail("");
         }, 4000);
       }
    } else {
      setForgotEmail("invalid email")
      setTimeout(() => {
        setForgotEmail("");
      },4000)
    }
    
  }


  const onConfirm = async () => {
   
     const response = await userRequest({
       method: "POST",
       url: "/user/emailverification",
       data: {otp: confirm },
     });
    if (response.data.status) {
      localStorage.setItem("user", JSON.stringify(response.data));
      navigate("/Home")
    } else {
        setForgotEmail("invalid otp");
        setTimeout(() => {
          setForgotEmail("");
        }, 4000);
    }
  }

  const onSubmit = (e) => {
    if (validate.isEmail(formData.email) === false) {
      setErrorEmail("invalid email");
       setTimeout(() => {
        setErrorEmail("");
       }, 4000);
    } else if (validate.isPassword(formData.password).status === false) {
      setErrorPassword("invalid password");
      setTimeout(() => {
        setErrorPassword("");
      }, 4000);
    } else {
      dispatch(login(formData));
    }
  };

   const [expandedTwo, setExpandedTwo] = React.useState(true);
   const [expanded, setExpanded] = React.useState(false);
   

  const handleExpandClick = () => {
     
    setExpanded(!expanded);
    setExpandedTwo(!expandedTwo);
    
  };
  
  useEffect(() => {
    if (localUser) {
      navigate("/Home")
    }
  },[user])



  return (
    <>
      <Navbar />

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Collapse in={expandedTwo} timeout="auto" unmountOnExit>
            <Typography
              mb={2}
              id="modal-modal-title"
              variant="h6"
              component="h2"
            >
              Enter your email
            </Typography>
            <TextField
              onChange={(e) => setForgot(e.target.value)}
              sx={{ width: "300px" }}
              id="outlined-basic"
              label="Email"
              variant="outlined"
              value={forgot}
            />
            <Button
              onClick={() => {
                onforgot();
              }}
              sx={{ height: "55px", marginLeft: 3 }}
              variant="contained"
            >
              Send
            </Button>

            <p style={{ color: "red" }}>{forgotEmail}</p>
          </Collapse>

          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <Box>
              <Typography variant="h6"> Enter your otp</Typography>
              <TextField
                onChange={(e) => setConfirm(e.target.value)}
                sx={{ width: "300px", marginTop: 2 }}
                id="outlined-basic"
                label="Otp"
                variant="outlined"
                value={confirm}
              />
              <Button
                sx={{ height: "55px", marginLeft: 3, marginTop: 2 }}
                variant="contained"
                onClick={() => onConfirm()}
              >
                Confirm
              </Button>
              <p style={{ color: "red" }}>{forgotEmail}</p>
            </Box>
          </Collapse>
        </Box>
      </Modal>

      <div className="sign_wrapper">
        <div className="sign_in">
          <div className="content">
            <h5 className="title">Log in</h5>
            <input
              onChange={(e) => onChangeHandler(e)}
              name="email"
              placeholder="email"
              className="text"
              type="text"
              value={formData.email}
            />
            <p style={{ color: "red" }}>{errorEmail}</p>
            <input
              onChange={(e) => onChangeHandler(e)}
              name="password"
              placeholder="password"
              className="text"
              type="password"
              value={formData.password}
            />
            <p style={{ color: "red" }}>{errorPassword}</p>
            <p style={{ color: "red" }}>{message}</p>

            {/* <p className="policy">
              By clicking Agree & Join, you agree to <br /> the Jobhunter User
              Agreement, Privacy Policy, and Cookie Policy.
            </p> */}

            <button onClick={() => onSubmit()} className="login_btn">
              Login
            </button>

            <p className="dont">
              Dont have an account?
              <Link
                style={{ textDecoration: "none", color: "#01A9C1" }}
                to="/signup"
              >
                Signup
              </Link>
            </p>
            <p className="dont">
              <Link
                style={{ textDecoration: "none", color: "#01A9C1" }}
                onClick={handleOpen}
              >
                Forget password ?
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
