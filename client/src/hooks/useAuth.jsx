import { useState, useEffect } from "react";
import http from "../http-common";
const useAuth = () => {
  const [isAuth, setIsAuth] = useState(false);
  useEffect(() => {
    if (!sessionStorage.getItem("token")) {
      setIsAuth(false);
    } else {
      const token = sessionStorage.getItem("token");
      http
        .get("/auth/verifyToken", {
          headers: {
            accept: "application/json",
            Authorization: token,
          },
        })
        .catch((err) => {
          setIsAuth(false);
        })
        .then((res) => {
          if (res.status === 200) {
            setIsAuth(true);
          }
        });
    }
  }, []);
  return { isAuth };
};

export default useAuth;
