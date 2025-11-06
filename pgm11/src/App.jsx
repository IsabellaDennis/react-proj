// src/App.jsx
import React from "react";
import ItemList from "./itemList.jsx";

const App = () => {
  const items = ["Apple", "Banana", "Orange", "Mango", "Grapes"];

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "50px",
      }}
    >
      <h1>Fruit List</h1>
      <ItemList items={items} />
    </div>
  );
};

export default App;

