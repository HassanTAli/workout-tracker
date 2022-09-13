import { createContext, useReducer } from "react";
import { CREATE_WORKOUT, SET_WORKOUTS } from "./WorkoutContextTypes";

export const WorkContext = createContext();

export const workoutsReducer = (state, { type, payload }) => {
  switch (type) {
    case SET_WORKOUTS:
      return {
        workouts: payload,
      };
    case CREATE_WORKOUT:
      return {
        workouts: [payload, ...state.workouts],
      };

    default:
      return state;
  }
};

export const WorkContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(workoutsReducer, {
    workouts: [],
  });

  return (
    <WorkContext.Provider value={{ ...state, dispatch }}>
      {children}
    </WorkContext.Provider>
  );
};
