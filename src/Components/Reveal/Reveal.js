import React, { useState } from "react";
import "./styles.css";

const ContentReveal = () => {
  const [revealed, setRevealed] = useState(false);

  const handleToggle = () => {
    setRevealed((prev) => !prev);
  };

  return (
    <div className="content-reveal-container mx-auto my-0 mt-1">
      <div className={`content ${revealed ? "revealed" : ""}`}>
        <h2>Contact Us</h2>
        <p>Phone: 555-555-5555</p>
        <p>
          Email:{" "}
          <a href="mailto:customers.grow.hydro@gmail.com">
            customers.grow.hydro@gmail.com
          </a>
        </p>
      </div>
      <div className={`background ${revealed ? "revealed" : ""}`} />
      <button className="toggle-button" onClick={handleToggle}>
        {revealed ? "Hide" : "Contact"}
      </button>
    </div>
  );
};

export default ContentReveal;
