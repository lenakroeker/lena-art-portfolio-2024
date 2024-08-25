import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("accessToken"); // Check if the access token is in local storage

  return isAuthenticated ? children : <Navigate to="/admin/home" />;
};

export default PrivateRoute;
