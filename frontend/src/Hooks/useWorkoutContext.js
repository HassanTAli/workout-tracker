import { useContext } from "react";
import { WorkContext } from "../context/WorkoutContext";

export const useWorkoutContext = () => {
  const context = useContext(WorkContext);

  if (!context)
    throw Error(
      "useWorkoutContext can not be used Except under WorkoutContextProvider"
    );

  return context;
};
