import React from "react";
import Header from "../Header/Header";
import "./SecondPage.css";

const SecondPage = () => {
  return (
    <>
      <Header />
      <div className="main-form">
        <div className="form-container">
          <h2>Food Entry Form</h2>
          <form>
            <div className="form-group">
              <label htmlFor="url">URL:</label>
              <input
                type="url"
                id="url"
                name="url"
                placeholder="Enter a valid URL"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="foodName">Food Name:</label>
              <input
                type="text"
                id="foodName"
                name="foodName"
                placeholder="Enter the food name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="location">Location:</label>
              <input
                type="text"
                id="location"
                name="location"
                placeholder="Enter the location"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="rating">Rating (1-5):</label>
              <select id="rating" name="rating" required>
                <option value="">Select a rating</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="place">Place in Pune:</label>
              <input
                type="text"
                id="place"
                name="place"
                placeholder="Enter the place in Pune"
                required
              />
            </div>

            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </>
  );
};

export default SecondPage;
