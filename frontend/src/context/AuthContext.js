import { createContext, useReducer } from "react";
import { LOGIN, SIGNUP } from "./AuthContextType";

export const AuthContext = createContext();

export const authReducers = (state, { type, payload }) => {
  switch (type) {
    case SIGNUP:
      return { user: payload };
    case LOGIN:
      return { user: null };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducers, { user: null });

  console.log("AuthContext: ", state);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
