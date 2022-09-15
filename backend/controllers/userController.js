const mongoose = require("mongoose");
const User = require("../models/user.model");

const loginUser = (req, res) => {
  res.json({ msg: "login user" });
};

const signupUser = (req, res) => {
  res.json({ msg: "sign up user" });
};

module.exports = { loginUser, signupUser };
