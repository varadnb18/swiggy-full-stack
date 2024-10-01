import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Header.css";
import { useAuth } from "../Auth-Validate/AuthContext"; // Import useAuth

function Header() {
  const { isAuthenticated, logout } = useAuth(); // Use the context
  const [name, setName] = useState("");
  const [role, setRole] = useState("");

  const navigate = useNavigate();
  axios.defaults.withCredentials = true;

  useEffect(() => {
    axios
      .get("http://localhost:4000")
      .then((response) => {
        if (response.status === 200) {
          setName(response.data.name);
          setRole(response.data.role);
          console.log(response.data.role);
        }
      })
      .catch((error) => {
        console.log("Error", error.response?.data || error.message);
      });
  }, []);

  const handleLogout = () => {
    axios
      .get("http://localhost:4000/logout")
      .then((response) => {
        if (response.data.status === "Success") {
          logout();
          navigate("/");
        }
      })
      .catch((err) => {
        console.error("Logout error:", err);
      });
  };

  return (
    <div className="header-div">
      <div className="left-side">
        <Link to="/main-page" style={{ textDecoration: "none" }}>
          <img src="../pp.png" alt="pp" className="pp" />
        </Link>
      </div>
      <div className="right-side">
        <p>
          <i className="bi bi-tv"></i> Prime Picks Corporate
        </p>
        <p>
          <i className="bi bi-search"></i> Search
        </p>
        <p>Offers</p>
        {role === "ADMIN" && (
          <Link to="/Accomodation" style={{ textDecoration: "none" }}>
            <p>Add Item</p>
          </Link>
        )}

        {!isAuthenticated ? (
          <Link to="/" style={{ textDecoration: "none" }}>
            <p>Login</p>
          </Link>
        ) : (
          <p onClick={handleLogout}>Logout</p>
        )}
      </div>
    </div>
  );
}

export default Header;
