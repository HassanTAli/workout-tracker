import { useEffect, useState } from "react";
import WorkoutDetails from "../Components/WorkoutDetails";
import WorkoutForm from "../Components/WorkoutForm";

const Home = () => {
  const [workouts, setWorkouts] = useState([]);
  console.log(workouts);
  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("/api/workouts/");
      const json = await response.json();

      if (response.ok) {
        setWorkouts(json);
      }
    };
    fetchWorkouts();
  }, []);
  return (
    <div className="home">
      <div className="workouts">
        {workouts.length !== 0 &&
          workouts.map((workout) => (
            <WorkoutDetails key={workout._id} workout={workout} />
          ))}
      </div>
      <WorkoutForm />
    </div>
  );
};

export default Home;
