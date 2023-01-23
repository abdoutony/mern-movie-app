import React, { useState, useEffect } from "react";
import NavBar from "../../nav-bar";
import LoginContext from "../../../contexts/loginContext";
import useAuth from "../../../hooks/useAuth";
export default function HomeLayout({ children }) {
  const { isAuth } = useAuth();
  return (
    <LoginContext.Provider value={{isAuth}}>
      <NavBar />
      {children}
    </LoginContext.Provider>
  );
}
