import React, { useState } from "react";
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

function SignInForm() {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const { login: authLogin } = useAuth();

  axios.defaults.withCredentials = true;

  function HandleInput(event) {
    const { value, name } = event.target;

    setLogin((prevalue) => ({
      ...prevalue,
      [name]: value,
    }));
  }

  function HandleSubmit(event) {
    event.preventDefault();

    axios
      .post("http://localhost:4000/login", login, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        if (response.status === 200) {
          authLogin(); // Call the login function from context
          navigate("/main-page");
          alert(response.data.message);
        }
      })
      .catch((error) => {
        console.log("Error occurred:", error.response.data.message);
        alert(error.response.data.message);
      });

    setLogin({
      email: "",
      password: "",
    });
  }

  return (
    <div className="form-container sign-in-container">
      <form action="#" className="form" onSubmit={HandleSubmit}>
        <h1 className="form-heading">Sign in</h1>
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
        <div className="input-field">
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={HandleInput}
            value={login.email}
            required
          />
          <label></label>
        </div>
        <div className="input-field">
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={HandleInput}
            value={login.password}
            required
          />
          <label></label>
        </div>
        <Link to="/change-password">
          <p className="forgot-password">Change your password?</p>
        </Link>
        <button className="form-button">Sign In</button>
      </form>
    </div>
  );
}

export default SignInForm;
