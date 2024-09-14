import React, { useState } from "react";
import "./Button.css";

function Button() {
  const [color, setColor] = useState("white");

  function response() {
    setColor(color === "white" ? "red" : "white");
  }

  return (
    <div className="heart-icon">
      <button id="btnh" className="btn" onClick={response}>
        <i
          className={color === "white" ? "bi bi-heart" : "bi bi-heart-fill"}
          style={{ color: color }}
        ></i>
      </button>
    </div>
  );
}

export default Button;
