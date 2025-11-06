// src/ItemList.jsx
import React from "react";

const ItemList = ({ items }) => {
  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {items.map((item, index) => (
        <li key={index} style={{ margin: "5px 0" }}>
          {item}
        </li>
      ))}
    </ul>
  );
};

export default ItemList;
