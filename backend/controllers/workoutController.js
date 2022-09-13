const { default: mongoose } = require("mongoose");
const Workout = require("../models/workout.model");

// get all workouts
const getWorkouts = async (req, res) => {
  const Workouts = await Workout.find({}).sort({ createdAt: -1 });

  res.status(200).json(Workouts);
};

// get a single workout
const getWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "NO Such Workout" });
  }

  const workout = await Workout.findById(id);

  if (!workout) {
    return res.status(404).json({ error: "NO Such Workout" });
  }

  res.status(200).json(workout);
};

// create new workout
const createWorkout = async (req, res) => {
  const { title, load, reps } = req.body;

  let emptyFields = [];

  if (!title) emptyFields.push("title");
  if (!load) emptyFields.push("load");
  if (!reps) emptyFields.push("reps");
  if (emptyFields.length > 0)
    return res
      .status(400)
      .json({ error: "PLease fill in all the Fields", emptyFields });

  // add to db
  try {
    const workout = await Workout.create({ title, load, reps });

    res.status(200).json(workout);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// delete a workout
const deleteWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "NO Such Workout" });
  }

  const deletedWorkout = await Workout.findOneAndDelete({ _id: id });

  if (!deletedWorkout) {
    return res.status(400).json({ error: "NO Such Workout" });
  }

  res.status(200).json(deletedWorkout);
};

// update a workout
const updateWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "NO Such Workout" });
  }

  const updatedWorkout = await Workout.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );
  if (!updatedWorkout) {
    return res.status(400).json({ error: "NO Such Workout" });
  }

  res.status(200).json(updatedWorkout);
};

module.exports = {
  createWorkout,
  getWorkouts,
  getWorkout,
  deleteWorkout,
  updateWorkout,
};
