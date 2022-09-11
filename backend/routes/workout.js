const express = require("express");

const router = express.Router();

// GET All Workouts
router.get("/", (req, res) => {
  res.json({ msg: "GET all the workout" });
});

// POST New Workout
router.post("/", (req, res) => {
  res.json({ msg: "Create A New Workout" });
});

// GET A Single Workout
router.get("/:id", (req, res) => {
  res.json({ msg: "GET A Single Workout" });
});

// DELETE A Single Workout
router.delete("/:id", (req, res) => {
  res.json({ msg: "DELETE A Single Workout" });
});

// UPDATE A Single Workout
router.patch("/:id", (req, res) => {
  res.json({ msg: "UPDATE A Single Workout" });
});

module.exports = router;
