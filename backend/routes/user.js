const express = require("express");
const { loginUser, signupUser } = require("../controllers/userController");

const router = express.Router();

// Login USer
router.post("/login", loginUser);

// Signup USer
router.post("/signup", signupUser);

module.exports = router;
