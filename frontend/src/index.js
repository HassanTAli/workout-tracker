import ReactDOM from "react-dom/client";
import App from "./App/App";
import { AuthContextProvider } from "./context/AuthContext";
import { WorkContextProvider } from "./context/WorkoutContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContextProvider>
    <WorkContextProvider>
      <App />
    </WorkContextProvider>
  </AuthContextProvider>
);
