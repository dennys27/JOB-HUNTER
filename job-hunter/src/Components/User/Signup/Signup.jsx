import React, { useEffect } from 'react'
import { useState } from 'react';
import './Signup.css'
import { register } from '../../../features/Auth/AuthSlice';
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import validate from 'neo-form-validations'

const Signup = () => {
  
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password:""
  })
  const [errorEmail, setErrorEmail] = useState("")
  const [already,setAlready] = useState("")
  const [errorPassword, setErrorPassword] = useState("")
  const dispatch = useDispatch()

  const handleChange = (e) => {
     
     setFormData((prevState) => ({
       ...prevState,
       [e.target.name]: e.target.value,
     }));
  }

  const onSubmit = (e) => {
    if (validate.isEmail(formData.email) === false) {
     setErrorEmail("invalid email")
    }
    
    else if (validate.isPassword(formData.password).status===false) {
      setErrorPassword("invalid password");
    } else {
      
      e.preventDefault();
      dispatch(register(formData));
      
    }
     
     
      
  };

  //testing...

    const { user, isLoading, isError, isSuccess, message } = useSelector(
      (state) => state.auth
  );
  
   console.log(message, "yuudfdsfjshdf");
   
    useEffect(() => {
      // if (isError) {
      //   toast.error(message);
      // }
   setAlready(message); 
      if ( user) {
         console.log(user);
          navigate("/login");
      }

     // dispatch(reset());
    }, [user, isError, isSuccess, message, navigate, dispatch]);
  


  return (
    <>
      <div className="sign_wrapper">
        <div className="sign_in">
          <div className="content">
            <h5 className="title">Signup</h5>
            <input
              onChange={(e) => handleChange(e)}
              name="email"
              placeholder="email"
              className="text"
              type="text"
              value={formData.email}
            />
            <p style={{color:"red"}} >{errorEmail}</p>
            <input
              name="password"
              placeholder="password"
              className="text"
              type="password"
              value={formData.password}
              onChange={(e) => handleChange(e)}
            />

            <p style={{color:"red"}} >{errorPassword}</p>
            <p style={{color:"red"}} >{already}</p>

            <p className="policy">
              By clicking Agree & Join, you agree to <br /> the Jobhunter User
              Agreement, Privacy Policy, and Cookie Policy.
            </p>

            <button onClick={(e) => onSubmit(e)} className="login_btn">
              Agree & Join
            </button>

            <p className="dont">
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup