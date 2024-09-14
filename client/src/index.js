import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Wishlist from "./Components/Wishlist/Wishlist";
import FrontPage from "./FrontPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/wishlist" element={<Wishlist />} />
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
