import React from 'react'
import { useState } from 'react';
import './Signup.css'
import { register } from '../../../features/Auth/AuthSlice';
import { useSelector, useDispatch } from "react-redux";

const Signup = () => {
  
  const [formData, setFormData] = useState({
    email: "",
    password:""
  })
  const dispatch = useDispatch()

  const handleChange = (e) => {
     setFormData((prevState) => ({
       ...prevState,
       [e.target.name]: e.target.value,
     }));
  }

    const onSubmit = (e) => {
      e.preventDefault();

        dispatch(register(formData));
      
    };

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
            <input
              name="password"
              placeholder="password"
              className="text"
              type="password"
              value={formData.password}
              onChange={(e) => handleChange(e)}
            />

            <p className="policy">
              By clicking Agree & Join, you agree to <br /> the Jobhunter User
              Agreement, Privacy Policy, and Cookie Policy.
            </p>

            <button onClick={(e) => onSubmit(e)} className="login_btn">
              Agree & Join
            </button>

            <p className="dont">
              Already have an account? <a>Login</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup