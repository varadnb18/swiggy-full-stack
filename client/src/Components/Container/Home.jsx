import React, { useState, useEffect } from "react";
import Container from "./Container";
import "./Container.css";

function Home() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:4000/FoodItems")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="hotel-container">
      {users.length > 0 ? (
        users.map((hotel) => <Container key={hotel.id} hotel={hotel} />)
      ) : (
        <p>No hotels found.</p>
      )}
    </div>
  );
}

export default Home;
