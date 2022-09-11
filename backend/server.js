// Lesson One : Express App Setup

require("dotenv").config();

const express = require("express");

const app = express();

// middleware
// => fancy name of code that execute between getting a request on server and us sending a response
app.use((req, res, next) => {
  console.log({ path: req.path, method: req.method });
  next();
});

//routes
app.get("/", (req, res) => {
  res.json({ msg: "welcome to app" });
});

app.listen(process.env.PORT, () => {
  console.log("server run on port 4000");
});
