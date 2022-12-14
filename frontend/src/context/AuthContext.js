import { createContext, useReducer, useEffect } from "react";
import { LOGIN, LOGOUT } from "./AuthContextType";

export const AuthContext = createContext();

export const authReducers = (state, { type, payload }) => {
  switch (type) {
    case LOGIN:
      return { user: payload };
    case LOGOUT:
      return { user: null };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducers, { user: null });

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) dispatch({ type: LOGIN, payload: user });
  }, []);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
