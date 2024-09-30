import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { AuthProvider } from "./Components/Auth-Validate/AuthContext";
import ProtectedRoute from "./Components/Auth-Validate/ProtectedRoute";
import FrontPage from "./Components/Pages/FrontPage";
import SecondPage from "./Components/Pages/SecondPage";
import ThirdPage from "./Components/Pages/ThirdPage";
import Fourthpage from "./Components/Pages/Fourthpage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ThirdPage />} />
      <Route path="/change-password" element={<Fourthpage />} />
      <Route
        path="/main-page"
        element={<ProtectedRoute element={<FrontPage />} />}
      />
      <Route
        path="/Accomodation"
        element={<ProtectedRoute element={<SecondPage />} />}
      />
    </Routes>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <Router>
        <App />
      </Router>
    </AuthProvider>
  </React.StrictMode>
);

reportWebVitals();
