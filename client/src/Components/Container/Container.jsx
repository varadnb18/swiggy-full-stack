import React from "react";
import "./Container.css";
import Button from "../Wishlist/Button";

function Container({ hotels }) {
  return (
    <>
      <div className="container">
        <div className="relative-container">
          <img className="box-img" src={hotels.house} alt="restaurant" />
          <Button />
        </div>

        <p className="place" style={{ fontWeight: 800 }}>
          {hotels.name}
        </p>

        <div className="rate">
          <img src={hotels.iconss} alt="star" className="star" />
          <p>{hotels.rate}</p>
          <span id="time" style={{ fontWeight: 600 }}>
            .{hotels.time}
          </span>
        </div>
        <p className="side">{hotels.more}</p>
        <p className="price">
          <span id="period">{hotels.location}</span>
        </p>
      </div>
    </>
  );
}

export default Container;
