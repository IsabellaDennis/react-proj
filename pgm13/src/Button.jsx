import React, { useState } from "react";

export default function Button({ label, variant }) {
  const [hover, setHover] = useState(false);
  const [pressed, setPressed] = useState(false);

  let buttonStyle = {
    padding: "12px 20px",
    width: "160px",        // 🔥 same width for all buttons
    textAlign: "center",
    borderRadius: "6px",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
    color: "white",
    transition: "0.2s",
    transform: pressed ? "scale(0.93)" : "scale(1)",
  };

  if (variant === "start") {
    buttonStyle.backgroundColor = hover ? "#1e7e34" : "#28a745";
  }

  if (variant === "stop") {
    buttonStyle.backgroundColor = hover ? "#c82333" : "#dc3545";
  }

  if (variant === "reset") {
    buttonStyle.backgroundColor = hover ? "#0056b3" : "#007bff";
  }

  if (variant === "delete") {
    buttonStyle.backgroundColor = hover ? "#a71d2a" : "#b21f2d";
  }

  return (
    <button
      style={buttonStyle}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setPressed(false); }}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
    >
      {label}
    </button>
  );
}







