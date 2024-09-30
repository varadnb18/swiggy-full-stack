import React from "react";
import "./Container.css";
import Button from "../Wishlist/Button";

function Container({ hotel, openPopup }) {
  return (
    <div className="container">
      <div className="relative-container">
        <img className="box-img" src={hotel.image_url} alt="restaurant" />
        <Button />
      </div>
      <div className="rate">
        <p className="place" style={{ fontWeight: 800 }}>
          {hotel.available_at.substring(0, 22)}...
        </p>
        <button className="deleteit" onClick={() => openPopup(hotel)}>
          <i className="bi bi-three-dots-vertical"></i>
        </button>
      </div>
      <div className="rate">
        <div className="oneline">
          <img src="./villa_images/images.jpg" alt="star" className="star" />
          <p>{hotel.rating}</p>
        </div>
        <div>
          <span id="time" style={{ fontWeight: 600 }}>
            {hotel.time_required}
          </span>
        </div>
      </div>
      <p className="side">{hotel.more_items.substring(0, 32)}...</p>

      <p className="price">
        <span id="period">{hotel.location}</span>
      </p>
    </div>
  );
}

export default Container;
