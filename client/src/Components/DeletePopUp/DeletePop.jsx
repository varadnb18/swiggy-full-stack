import React from "react";
import "./DeletePop.css";

function DeletePop({ closePopup, handleDelete, hotel }) {
  return (
    <div className="model-btn">
      <div className="flex-box">
        <p className="text-xl font-semibold">
          Delete this {hotel?.available_at.substring(0, 22)}...?
        </p>
        <p className="text-gray-600">
          " This hotel will be{" "}
          <span>
            <br />
            permanently deleted."
          </span>
        </p>
      </div>
      <hr />
      <div className="deletebuttons">
        <div>
          <button className="no-btn font-semibold" onClick={closePopup}>
            Cancel
          </button>
        </div>
        <div className="yes-btn font-semibold">
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default DeletePop;
