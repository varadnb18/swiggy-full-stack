import React from "react";
import "./LoginPage.css";

function SignInForm() {
  return (
    <div className="form-container sign-in-container">
      <form action="#" className="form">
        <h1 className="form-heading">Sign in</h1>
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
        <span className="alternate-login">or use your account</span>
        <div className="input-field">
          <input type="email" placeholder="Email" name="email" />
          <label></label>
        </div>
        <div className="input-field">
          <input type="password" placeholder="Password" />
          <label></label>
        </div>
        <a href="#" className="forgot-password">
          Forgot your password?
        </a>
        <button className="form-button">Sign In</button>
      </form>
    </div>
  );
}

export default SignInForm;
