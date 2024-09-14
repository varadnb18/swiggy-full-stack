import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div className="header-div">
      <div className="left-side">
        <p>Prime Picks</p>
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
        <Link to="/wishlist" style={{ textDecoration: "none" }}>
          <p>Cart</p>
        </Link>
      </div>
    </div>
  );
}

export default Header;
