import React, { useState } from "react";
import "./LoginPage.css";
import axios from "axios";
import "./LoginPage.css";
import { useNavigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGooglePlusG,
  faFacebookF,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { useAuth } from "../Auth-Validate/AuthContext";

function Changepassword() {
  return (
    <div className="change-container">
      <div className="form-container1 sign-in-container">
        <form action="#" className="form2">
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
            <input type="email" placeholder="Email" name="email" required />
            <label></label>
          </div>
          <div className="change-field">
            <input
              type="password"
              placeholder="Old Password"
              name="password"
              required
            />
            <label></label>
          </div>
          <div className="change-field">
            <input type="password" placeholder="New Password" name="password" />
            <label></label>
          </div>
          <div className="button-container">
            <div>
              <Link to="/">
                <button className="form-button">Back</button>
              </Link>
            </div>
            <div>
              <button className="form-button">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Changepassword;
