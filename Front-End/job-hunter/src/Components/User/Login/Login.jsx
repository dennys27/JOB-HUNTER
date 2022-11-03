import { Box, Container, Paper, TextField, Typography } from "@mui/material";
import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <>
      <div className="sign_wrapper">
        <div className="sign_in">
          <h5 className="title">Log in</h5>
          <input className="text" type="text" value="" />
        </div>
      </div>
    </>
  );
};

export default Login;
