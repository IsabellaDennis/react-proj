import React from "react";
import Count from "./Count";

function App() {
  return (
    <div
      style={{
        height: "100vh",           // full screen height
        width: "100vw",            // full screen width
        display: "flex",           // flexbox layout
        flexDirection: "column",   // stack vertically
        justifyContent: "center",  // center vertically
        alignItems: "center",      // center horizontally
        textAlign: "center",       // center text
      }}
    >
      <h1>React Counter App</h1>
      <Count />
    </div>
  );
}

export default App;




