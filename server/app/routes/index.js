const express = require("express");
const authRoutes = require("./auth");
const movieRoutes = require("./movies");
const checkLogin = require("../middleware/auth");
const router = express.Router();

module.exports = () => {
  router.use("/auth", authRoutes());
  router.use("/movies", movieRoutes());
  return router;
};
