import React from "react";
import Container from "./Container";
import "./Container.css";
import Hotel from "../../DataFiles/Hotel-Images";

function Home() {
  return (
    <div className="hotel-container">
      {Hotel.map((hotels) => (
        <Container hotels={hotels} />
      ))}
    </div>
  );
}

export default Home;
