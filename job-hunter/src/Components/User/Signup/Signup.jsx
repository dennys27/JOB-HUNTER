import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
   import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import "./Signup.css";
import { register } from "../../../features/Auth/AuthSlice";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import validate from "neo-form-validations";
import Navbar from "../Navbar/Navbar";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errorEmail, setErrorEmail] = useState("");
  const [already, setAlready] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

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
      e.preventDefault();
      dispatch(register(formData));
    }
  };

  //testing...

  const { user, message } = useSelector(
    (state) => state.auth
  );
   let localUser =JSON.parse(localStorage.getItem("user")) 

 
  
  const toasts = async (user) => {
    if (user?.status) {
      console.log("inside...");
      await toast("Wow so easy!");
    }

  }

  
  
  useEffect(() => {
   
    if (localUser) {
        
         navigate("/Home");
     
         
       
        
      }
   
  }, [user]);

  return (
    <>
      <Navbar />
      <ToastContainer />
      <div className="sign_wrapper">
        <div className="sign_in">
          <div className="content">
            <h5 className="title">Sign up</h5>
            <input
              onChange={(e) => handleChange(e)}
              name="email"
              placeholder="email"
              className="text"
              type="text"
              value={formData.email}
            />
            <p style={{ color: "red" }}>{errorEmail}</p>
            <input
              name="password"
              placeholder="password"
              className="text"
              type="password"
              value={formData.password}
              onChange={(e) => handleChange(e)}
            />

            <p style={{ color: "red" }}>{errorPassword}</p>
            <p style={{ color: "red" }}>{message}</p>

            <p className="policy">
              By clicking Agree & Join, you agree to <br /> the Jobhunter User
              Agreement, Privacy Policy, and Cookie Policy.
            </p>

            <button onClick={(e) => onSubmit(e)} className="login_btn">
              Agree & Join
            </button>

            <p className="dont">
              Already have an account?{" "}
              <Link
                style={{ textDecoration: "none", color: "#01A9C1" }}
                to="/login"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
