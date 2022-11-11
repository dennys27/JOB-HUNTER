import React from "react";
import { Navigate, Outlet } from "react-router-dom";
//import { AuthContext } from "../Store/context";

const UserRoutes = () => {
 
  //const token = localStorage.getItem("token");
  const token2 = JSON.parse(localStorage.getItem("user"))?.token;
  //  if (token2) {
  //    const userAuth = JSON.parse(localStorage.getItem("user"))
  //    setUser(userAuth);

  //  }

  return token2 ? <Outlet /> : <Navigate to="/login" />;
};

export default UserRoutes;
