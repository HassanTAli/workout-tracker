// Lesson One : Express App Setup

require("dotenv").config();

const express = require("express");
const workoutRouters = require("./routes/workout");

// express app
const app = express();

// middleware
// => fancy name of code that execute between getting a request on server and us sending a response
app.use(express.json());

app.use((req, res, next) => {
  console.log({ path: req.path, method: req.method });
  next();
});

//routes
app.use("/api/workouts", workoutRouters);

app.listen(process.env.PORT, () => {
  console.log("server run on port 4000");
});
