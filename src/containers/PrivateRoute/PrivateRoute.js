import React from "react";
import { Navigate } from "react-router-dom";
import { history } from "../../_helpers";
const PrivateRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("user");

  if (!isAuthenticated) {
    // not logged in so redirect to login page with the return url
    return <Navigate to='/login' state={{ from: history.location }} />;
  }
  return children;
};

export { PrivateRoute };
