import React, { useState, useEffect } from "react";

function Count() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Count updated:", count);
  }, [count]);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)} style={{ marginLeft: "10px" }}>
        Decrement
      </button>
    </div>
  );
}

export default Count;



