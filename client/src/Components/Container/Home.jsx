import React, { useState, useEffect } from "react";
import Container from "./Container";
import DeletePop from "../DeletePopUp/DeletePop";
import "./Container.css";

function Home() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedHotel, setSelectedHotel] = useState(null);

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

  const openPopup = (hotel) => {
    setSelectedHotel(hotel);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedHotel(null);
  };

  const handleDelete = () => {
    fetch(`http://localhost:4000/FoodItems/${selectedHotel.id}`, {
      method: "DELETE",
      credentials: "include",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to delete food item");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data.message);
        closePopup();
      })
      .catch((error) => {
        console.error("Error deleting food item:", error);
      });
    window.location.reload();
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="hotel-container">
      {users.length > 0 ? (
        users.map((hotel) => (
          <Container key={hotel.id} hotel={hotel} openPopup={openPopup} />
        ))
      ) : (
        <p>No hotels found.</p>
      )}
      {isPopupOpen && (
        <DeletePop
          closePopup={closePopup}
          handleDelete={handleDelete}
          hotel={selectedHotel}
        />
      )}
    </div>
  );
}

export default Home;
