import "./why-styles.css";
import React, { useState } from "react";

const RevealWhy = () => {
  const [revealed, setRevealed] = useState(false);

  const handleToggle = () => {
    setRevealed((prev) => !prev);
  };

  return (
    <div className="reveal-y-container mx-auto my-1">
      <button className="toggle-y-button" onClick={handleToggle}>
      {revealed ? "Hide" : "Why"}
      </button>
      <div className={`reveal-y-content ${revealed ? "revealed" : ""}`}>
        <h2>Why Hydroponics is Amazing</h2>
        <p>Hydroponics can save you as much as 1000$ a year</p>
        <p>Hydroponics can grow as much as you want</p>
        <p>Hydroponics allows for year-round blooming</p>
        <p>Become your own Dispensary</p>
      </div>
      <div className={`ybackground ${revealed ? "revealed" : ""}`} />
    </div>
  );
};

export default RevealWhy;