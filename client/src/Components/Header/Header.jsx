import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div className="header-div">
      <div className="left-side">
        <Link to="/" style={{ textDecoration: "none" }}>
          {/* <p>Prime Picks</p> */}
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
        <p>Help</p>
        <Link to="/Accomodation" style={{ textDecoration: "none" }}>
          <p>Add Item</p>
        </Link>
      </div>
    </div>
  );
}

export default Header;
