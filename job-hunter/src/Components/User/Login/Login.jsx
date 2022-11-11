import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login} from "../../../features/Auth/AuthSlice";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { useEffect } from "react";



const Login = () => {

   const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    email: "",
    password:""
  })
  const [errorData, setErrorData] = useState("")

  const dispatch = useDispatch();

   const { user, isLoading, isError, isSuccess, message } = useSelector(
     (state) => state.auth
   );

  const onChangeHandler = (e) => {
     setFormData((prevState) => ({
       ...prevState, 
       [e.target.name]: e.target.value,
     }));
  }

  const onSubmit = (e) =>{
     dispatch(login(formData));
  }
  
      useEffect(() => {
        // if (isError) {
        //   toast.error(message);
        // }
        setErrorData(message)
      
        if (user) {
          console.log(user);
          navigate("/Home");
        }

        // dispatch(reset());
      }, [user, isError, isSuccess, message, navigate, dispatch]);

  return (
    <>
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
            <input
              onChange={(e) => onChangeHandler(e)}
              name="password"
              placeholder="password"
              className="text"
              type="password"
              value={formData.password}
            />
            <p>{errorData}</p>

            <p className="policy">
              By clicking Agree & Join, you agree to <br /> the Jobhunter User
              Agreement, Privacy Policy, and Cookie Policy.
            </p>

            <button onClick={() => onSubmit()} className="login_btn">
              Login
            </button>

            <p className="dont">
              Dont have an account? <a>Signup</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;