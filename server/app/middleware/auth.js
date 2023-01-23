const jwt = require("jsonwebtoken");
const User = require("../models/user");
require("dotenv").config();
const checkLogin = async (req, res, next) => {
  if (req.headers.authorization) {
    const token = req.headers.authorization;
    console.log(token.charAt(0));
    if (token.charAt(0) === '"' && token.charAt(token.length - 1 === '"')) {
      var result = token.substring(1, token.length - 1);
    } else {
      var result = token;
    }
    const user = jwt.decode(result, process.env.TOKEN_KEY);
    if (!user) {
      return res.status(409).send("Invalid token");
    }
    const rs = await User.findOne({ _id: user.user_id });
    if (!rs) {
      return res.status(308).json({
        access: "NOT Allowed",
      });
    } else {
      return next();
    }
  } else {
    return res.status(404).json({
      access: "NOT Allowed",
    });
  }
};

module.exports = { checkLogin };
