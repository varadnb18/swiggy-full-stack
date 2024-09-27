import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
// import Wishlist from "./Components/Wishlist/Wishlist";
import FrontPage from "./Components/Pages/FrontPage";
import SecondPage from "./Components/Pages/SecondPage";
import ThirdPage from "./Components/Pages/ThirdPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/main-page" element={<FrontPage />} />
        <Route path="/Accomodation" element={<SecondPage />} />
        <Route path="/" element={<ThirdPage />} />
        {/* Add other routes here */}
      </Routes>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

reportWebVitals();
