import React, { useState } from "react";
import "./Form.css";

function Form() {
  const [user, setUser] = useState({
    url: "",
    foodName: "",
    location: "",
    rating: "",
    place: "",
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
      url: "",
      foodName: "",
      location: "",
      rating: "",
      place: "",
    });
  }

  return (
    <div className="main-form">
      <div className="form-container">
        <h2>Food Entry Form</h2>
        <form onSubmit={HandleSubmit}>
          <div className="form-group">
            <label htmlFor="url">URL:</label>
            <input
              type="url"
              name="url"
              placeholder="Enter a valid URL"
              value={user.url}
              onChange={HandleInput}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="foodName">Food Name:</label>
            <input
              type="text"
              name="foodName"
              placeholder="Enter the food name"
              value={user.foodName}
              onChange={HandleInput}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="location">Location:</label>
            <input
              type="text"
              name="location"
              placeholder="Enter the location"
              value={user.location}
              onChange={HandleInput}
              required
            />
          </div>

          <div className="form-group">
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
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="place">Place in Pune:</label>
            <input
              type="text"
              id="place"
              name="place"
              placeholder="Enter the place in Pune"
              value={user.place}
              onChange={HandleInput}
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
