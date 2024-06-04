import React from "react";
import Searcher from "./Searcher";
import { useState } from "react";
import "../styles/CaloriesCounter.css";

export const CaloriesCounter = () => {
  const [state, setState] = useState([]);
  const setCurrentProduct = (data) => {
    setState([...state, data]);

    console.log(state);
  };
  return (
    <div className="counter">
      <h2>Type products and search it</h2>
      <Searcher setCurrentProduct={setCurrentProduct} />
    </div>
  );
};
