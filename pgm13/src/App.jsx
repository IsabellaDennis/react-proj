import React from "react";
import Button from "./Button";

export default function App() {
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

      <Button label="Start" variant="start" />
      <Button label="Stop" variant="stop" />
      <Button label="Reset" variant="reset" />
      <Button label="Delete" variant="delete" />
    </div>
  );
}









