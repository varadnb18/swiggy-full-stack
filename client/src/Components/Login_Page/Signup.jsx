import React from "react";
import "./LoginPage.css";

function SignUpForm() {
  return (
    <div className="form-container sign-up-container">
      <form action="#" className="form">
        <h1 className="form-heading">Create Account</h1>
        <div className="social-container">
          <a href="#" className="social-icon">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="social-icon">
            <i className="fab fa-google-plus-g"></i>
          </a>
          <a href="#" className="social-icon">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
        <span className="alternate-login">
          or use your email for registration
        </span>
        <div className="input-field">
          <input type="text" placeholder="Name" />
          <label></label>
        </div>
        <div className="input-field">
          <input type="email" placeholder="Email" name="email" />
          <label></label>
        </div>
        <div className="input-field">
          <input type="password" placeholder="Password" />
          <label></label>
        </div>
        <button className="form-button">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUpForm;
