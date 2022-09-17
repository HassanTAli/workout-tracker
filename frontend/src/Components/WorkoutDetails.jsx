import { DELETE_WORKOUT } from "../context/WorkoutContextTypes";
import { useWorkoutContext } from "../Hooks/useWorkoutContext";

import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { useAuthContext } from "../Hooks/useAuthContext";

const WorkoutDetails = ({ workout }) => {
  const { dispatch } = useWorkoutContext();
  const { user } = useAuthContext();

  const handleClick = async () => {
    if (!user) return;
    const response = await fetch("/api/workouts/" + workout._id, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
    const json = await response.json();

    if (response.ok) dispatch({ type: DELETE_WORKOUT, payload: json });
  };

  return (
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <p>
        <strong>Load (Kg) : </strong> {workout.load}
      </p>
      <p>
        <strong>Reps : </strong> {workout.reps}
      </p>
      <p></p>
      <p>
        {formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}
      </p>
      <span onClick={handleClick} className="material-symbols-outlined">
        delete
      </span>
    </div>
  );
};

export default WorkoutDetails;
