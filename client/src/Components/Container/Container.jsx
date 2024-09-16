import React from "react";
import "./Container.css";
import Button from "../Wishlist/Button";

function Container({ hotel }) {
  return (
    <div className="container">
      <div className="relative-container">
        <img className="box-img" src={hotel.image_url} alt="restaurant" />
        <Button />
      </div>

      <p className="place" style={{ fontWeight: 800 }}>
        {hotel.available_at}
      </p>

      <div className="rate">
        <img src={hotel.iconss} alt="star" className="star" />
        <p>{hotel.rating}</p>
        <span id="time" style={{ fontWeight: 600 }}>
          {hotel.time_required}
        </span>
      </div>
      <p className="side">{hotel.more_items}</p>
      <p className="price">
        <span id="period">{hotel.location}</span>
      </p>
    </div>
  );
}

export default Container;
