import React from "react";
import Searcher from "./Searcher";
import "../styles/CaloriesCounter.css";

export const CaloriesCounter = ({ setCurrentProduct }) => {
  return (
    <div className="counter">
      <h2>Type products and search it</h2>
      <Searcher setCurrentProduct={setCurrentProduct} />
    </div>
  );
};
