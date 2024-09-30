import React, { useState } from "react";
import "./LoginPage.css";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGooglePlusG,
  faFacebookF,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { useAuth } from "../Auth-Validate/AuthContext";

function Changepassword() {
  const [change, setChange] = useState({
    email: "",
    oldPassword: "",
    newPassword: "",
  });

  const navigate = useNavigate();
  const { authLogin } = useAuth();

  const handleInput = (event) => {
    const { value, name } = event.target;
    setChange((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.patch(
        "http://localhost:4000/update-password",
        {
          email: change.email,
          oldPassword: change.oldPassword,
          newPassword: change.newPassword,
        }
      );

      if (response.status === 200) {
        alert("Password updated successfully!");
        navigate("/");
      }
    } catch (error) {
      console.error("Error updating password", error);
      alert("Failed to update password. Please try again.");
    }

    setChange({
      email: "",
      oldPassword: "",
      newPassword: "",
    });
  };

  return (
    <div className="change-container">
      <div className="form-container1 sign-in-container">
        <form action="#" className="form2" onSubmit={handleSubmit}>
          <h1 className="form-heading">Change Password</h1>
          <div className="social-container">
            <a href="#" className="social-icon">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="#" className="social-icon">
              <FontAwesomeIcon icon={faGooglePlusG} />
            </a>
            <a href="#" className="social-icon">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </div>
          <span className="alternate-login">or use your account</span>
          <div className="change-field">
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={change.email}
              onChange={handleInput}
              required
            />
            <label></label>
          </div>
          <div className="change-field">
            <input
              type="password"
              placeholder="Old Password"
              name="oldPassword"
              value={change.oldPassword}
              onChange={handleInput}
              required
            />
            <label></label>
          </div>
          <div className="change-field">
            <input
              type="password"
              placeholder="New Password"
              name="newPassword"
              value={change.newPassword}
              onChange={handleInput}
              required
            />
            <label></label>
          </div>
          <div className="button-container">
            <div>
              <Link to="/">
                <button type="button" className="form-button">
                  Back
                </button>
              </Link>
            </div>
            <div>
              <button type="submit" className="form-button">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Changepassword;
