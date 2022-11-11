import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login} from "../../../features/Auth/AuthSlice";
import { Link, useNavigate } from "react-router-dom";
import validate from "neo-form-validations";
import "./Login.css";
import { useEffect } from "react";
import Navbar from "../Navbar/Navbar";



const Login = () => {

   const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    email: "",
    password:""
  })
  const [errorData, setErrorData] = useState("")
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");

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

  const onSubmit = (e) => {
     if (validate.isEmail(formData.email) === false) {
       setErrorEmail("invalid email");
     } else if (validate.isPassword(formData.password).status === false) {
       setErrorPassword("invalid password");
     } else {
       dispatch(login(formData));
     }
     
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
      <Navbar />
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
            <p>{errorData}</p>

            <p className="policy">
              By clicking Agree & Join, you agree to <br /> the Jobhunter User
              Agreement, Privacy Policy, and Cookie Policy.
            </p>

            <button onClick={() => onSubmit()} className="login_btn">
              Login
            </button>

            <p className="dont">
              Dont have an account?{" "}
              <Link style={{ textDecoration: "none" }} to="/signup">
                Signup
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
