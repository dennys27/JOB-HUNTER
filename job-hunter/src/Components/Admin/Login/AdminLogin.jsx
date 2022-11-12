import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./AdminLogin.css";
import { useEffect } from "react";
import './AdminLogin.css';
import validate from "neo-form-validations";
import { login } from "../../../features/Auth/AdminAuthSlice";
import AdminNavbar from "../AdminNavbar/AdminNavbar";

const AdminLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  
  const [errorData, setErrorData] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
 

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.adminAuth
  );

  const onChangeHandler = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
   if (validate.isEmail(formData.email) === false) {
     setErrorEmail("invalid email");
   } else if (validate.isPassword(formData.password).status === false) {
     setErrorPassword("invalid password");
   } else {
     dispatch(login(formData));
   }
  };

  let localAdmin = localStorage.getItem("admin");

  useEffect(() => {
    // if (isError) {
    //   toast.error(message);
    // }
    setErrorData(message);

    if (user || localAdmin) {
      console.log(user);
      navigate("/adminhome");
    }

    // dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  return (
    <>
      <AdminNavbar />
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

export default AdminLogin;
