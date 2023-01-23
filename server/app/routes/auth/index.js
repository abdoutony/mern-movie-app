const express = require("express");
const AuthController = require("../../controllers/AuthController");
const { checkLogin } = require("../../middleware/auth");
const router = express.Router();
module.exports = () => {
  router.post("/register", AuthController.register);
  router.post("/login", AuthController.login);
  router.get("/verifytoken", checkLogin, (req, res) => {
    res.status(200).send("Authorized");
  });
  return router;
};
