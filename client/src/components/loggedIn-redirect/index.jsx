import React from "react";
import useAuth from "../../hooks/useAuth";
import { Navigate } from "react-router-dom";
const LoggedInRedirect = ({ children }) => {
  const { isAuth } = useAuth();
  if (isAuth) {
    return <Navigate to="/admin/movies" />;
  } else {
    return children;
  }
};

export default LoggedInRedirect;
