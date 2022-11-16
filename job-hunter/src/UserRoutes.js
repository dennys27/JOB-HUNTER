import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const UserRoutes = () => {
 
  const token2 = JSON.parse(localStorage.getItem("user"))?.token;
 
  return token2 ? <Outlet /> : <Navigate to="/login" />;
};



export const UserRoutesTwo = () => {
 
  const token2 = JSON.parse(localStorage.getItem("user"))?.token;

  return token2 === "" || token2 === null || token2 === undefined ? (
    <Outlet />
  ) : (
    <Navigate to="/Home" />
  );
  
};

export default UserRoutes;
