import React, { useState } from "react";
import "../styles/Filter.css"; 

const Filters = () => {
  const [filters] = useState([
    "Type of Plants",
    "Price",
    "Nursery",
    "Ideal Plants Location",
    "Indoor/ Outdoor",
    "Maintenance",
    "Plant Size",
    "Water Schedule",
    "Color",
    "Seasonal",
    "Light Efficient",
  ]);

  return (
    <div className="filters-container">
      <div className="filters-header">
        <h3>Filter</h3>
        <button className="clear-all">CLEAR ALL</button>
      </div>
      <ul className="filters-list">
        {filters.map((filter, index) => (
          <li key={index} className="filter-item">
            <span>{filter}</span>
            <span className="toggle">+</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Filters;
