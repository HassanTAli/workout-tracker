const express = require("express");
const {
  createWorkout,
  getWorkouts,
  getWorkout,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/workoutController");
const requireAuth = require("../middleware/requireAuth");

const router = express.Router();

router.use(requireAuth);

// GET All Workouts
router.get("/", getWorkouts);

// POST New Workout
router.post("/", createWorkout);

// GET A Single Workout
router.get("/:id", getWorkout);

// DELETE A Single Workout
router.delete("/:id", deleteWorkout);

// UPDATE A Single Workout
router.patch("/:id", updateWorkout);

module.exports = router;
