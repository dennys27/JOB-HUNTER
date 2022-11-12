import React from "react";
import { Navigate, Outlet } from "react-router-dom";


const AdminRoutes = () => {
  //const token = localStorage.getItem("token");
  const token2 = JSON.parse(localStorage.getItem("admin"))?.token;
  //  if (token2) {
  //    const userAuth = JSON.parse(localStorage.getItem("user"))
  //    setUser(userAuth);

  //  }

  return token2 ? <Outlet /> : <Navigate to="/admin" />;
};

export default AdminRoutes;
