import React from "react";
import "./Login.css";



const Login = () => {
  return (
    <>
      <div className="sign_wrapper">
        <div className="sign_in">
          <div className="content">
            <h5 className="title">Log in</h5>
            <input placeholder="email" className="text" type="text" value="" />
            <input
              placeholder="password"
              className="text"
              type="password"
              value=""
            />

            <p className="policy">
              By clicking Agree & Join, you agree to <br /> the Jobhunter User
              Agreement, Privacy Policy, and Cookie Policy.
            </p>

            <button className="login_btn">Login</button>

            <p className="dont">
              Dont have an account? <a >Signup</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
