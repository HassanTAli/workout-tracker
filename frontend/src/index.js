import ReactDOM from "react-dom/client";
import App from "./App/App";
import { WorkContextProvider } from "./context/WorkoutContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <WorkContextProvider>
    <App />
  </WorkContextProvider>
);
