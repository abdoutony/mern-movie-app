import React from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

export const PrivateRoute = ({ children }) => {
  const [child, setChild] = useState();
  if (!sessionStorage.getItem("token")) {
    return <Navigate to="/login" />;
  } else {
    const token = sessionStorage.getItem("token");
    console.log(token);
    const options = {
      url: "http://localhost:5000/api/auth/verifytoken",
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: token,
      },
    };
    axios(options)
      .catch((error) => {
        window.location = "/login";
      })
      .then((res) => {
        if (res.status === 200) {
          return setChild(children);
        } else {
          return <Navigate to="/login" />;
        }
      });
  }
  return child;
};
