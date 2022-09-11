import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "../Components/Navbar";
import Home from "../Pages/Home";

import "./App.css";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
