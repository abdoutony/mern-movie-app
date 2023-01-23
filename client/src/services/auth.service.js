import http from "../http-common";

export const login = ({ email, password }) => {
  ///api call
  http
    .post("/auth/login", { email, password })
    .then((res) => {
      if (res.status === 200) {
        const data = res.data;
        sessionStorage.setItem("token", JSON.stringify(data));
        setTimeout(() => {
          window.location = "/admin/movies";
        }, 1000);
      }
    })
    .catch((err) => {
      alert("Incorrect credentials");
      setTimeout(() => {
        window.location = "/login";
      }, 1000);
    });
};

export const logout = () => {
  if (sessionStorage.getItem("token")) {
    sessionStorage.removeItem("token");
    window.location = "/";
  }
};
