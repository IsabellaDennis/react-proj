import React, { useState } from "react";
import Button from "./Button";

export default function App() {
  const [message, setMessage] = useState("");

  const handleButtonClick = (label) => {
    // Display message based on the clicked button label
    switch (label) {
      case "Start":
        setMessage("Started the process!");
        break;
      case "Stop":
        setMessage("Process stopped.");
        break;
      case "Reset":
        setMessage("Resetting the process.");
        break;
      case "Delete":
        setMessage("Item deleted.");
        break;
      default:
        setMessage("");
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
        textAlign: "center",
      }}
    >
      <h2>Reusable Buttons Demo</h2>

      <Button label="Start" variant="start" onClick={handleButtonClick} />
      <Button label="Stop" variant="stop" onClick={handleButtonClick} />
      <Button label="Reset" variant="reset" onClick={handleButtonClick} />
      <Button label="Delete" variant="delete" onClick={handleButtonClick} />

      {message && <p>{message}</p>} {/* Display the message */}
    </div>
  );
}









