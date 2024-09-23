import React, { useState } from "react";
import "./Form.css";

function Form() {
  const [user, setUser] = useState({
    image_url: "",
    available_at: "",
    location: "",
    rating: "",
    more_items: "",
    time_required: "",
  });

  function HandleInput(event) {
    const { name, value } = event.target;

    setUser((prevalue) => {
      return {
        ...prevalue,
        [name]: value,
      };
    });
  }

  function HandleSubmit(event) {
    event.preventDefault();

    fetch("http://localhost:4000/submit-form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    setUser({
      image_url: "",
      available_at: "",
      location: "",
      rating: "",
      more_items: "",
      time_required: "",
    });
  }

  return (
    <div className="rahul-form">
      <div className="viraj-container">
        <h2>Food Entry Form</h2>
        <form onSubmit={HandleSubmit}>
          <div className="arjun-group">
            <label htmlFor="image_url">Image URL:</label>
            <input
              type="url"
              name="image_url"
              placeholder="Enter the image URL"
              value={user.image_url}
              onChange={HandleInput}
              style={{ outline: "none" }}
              required
            />
          </div>

          <div className="siddharth-group">
            <label htmlFor="available_at">Available At:</label>
            <input
              type="text"
              name="available_at"
              placeholder="Enter the shop or restaurant name"
              value={user.available_at}
              onChange={HandleInput}
              style={{ outline: "none" }}
              required
            />
          </div>

          <div className="aniket-group">
            <label htmlFor="location">Location:</label>
            <input
              type="text"
              name="location"
              placeholder="Enter the location in Pune"
              value={user.location}
              onChange={HandleInput}
              style={{ outline: "none" }}
              required
            />
          </div>

          <div className="rohit-group">
            <label htmlFor="rating">Rating (1-5):</label>
            <input
              type="number"
              id="rating"
              name="rating"
              min="1"
              max="5"
              step="0.1"
              placeholder="Enter a rating between 1 and 5"
              value={user.rating}
              onChange={HandleInput}
              style={{ outline: "none" }}
              required
            />
          </div>

          <div className="neeraj-group">
            <label htmlFor="more_items">More Items:</label>
            <input
              type="text"
              name="more_items"
              placeholder="Enter other items available at the place"
              value={user.more_items}
              onChange={HandleInput}
              style={{ outline: "none" }}
              required
            />
          </div>

          <div className="saurabh-group">
            <label htmlFor="time_required">Time Required To Prepare:</label>
            <input
              type="text"
              name="time_required"
              placeholder="Enter preparation time (e.g., 20 minutes)"
              value={user.time_required}
              onChange={HandleInput}
              style={{ outline: "none" }}
              required
            />
          </div>

          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}

export default Form;
