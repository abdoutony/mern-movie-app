const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "user",
  },
  token: {
    type: String,
  },
  createAt: {
    type: Date,
    default: Date.now(),
  },
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

module.exports = User;
