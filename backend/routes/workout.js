const express = require("express");
const Workout = require("../models/workout.model");

const router = express.Router();

// GET All Workouts
router.get("/", (req, res) => {
  res.json({ msg: "GET all the workout" });
});

// POST New Workout
router.post("/", async (req, res) => {
  const { title, load, reps } = req.body;
  try {
    const workout = await Workout.create({ title, load, reps });

    res.status(200).json(workout);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
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
