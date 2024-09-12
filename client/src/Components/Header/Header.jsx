import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header-div ">
      <div className="left-side">
        <p>Prime Picks</p>
      </div>
      <div className="right-side">
        <p>
          <i class="bi bi-tv"></i>Prime Picks Corporate
        </p>
        <p>
          <i class="bi bi-search"></i>Search
        </p>
        <p>Offers</p>
        <p>Help</p>
        <p>Cart</p>
      </div>
    </div>
  );
}

export default Header;
