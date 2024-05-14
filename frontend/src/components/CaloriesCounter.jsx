import React from "react";
import Searcher from "../modules/Searcher";
import CarouselDay from "../modules/Calendar";
import { useState } from "react";
import "../styles/CaloriesCounter.css";

function CaloriesCounter() {
  const [state, setState] = useState(null);
  const setCurrentProduct = (data) => {
    setState(data);
  };
  return (
    <div className="counter">
      <h2>Type products and search it</h2>
      <Searcher setCurrentProduct={setCurrentProduct} />
      <h2>Add chosen product to right part of day</h2>
      <CarouselDay product={state} />
    </div>
  );
}

export default CaloriesCounter;
