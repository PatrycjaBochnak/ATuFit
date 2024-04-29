import React from "react";
import Searcher from "./Searcher";
import CarouselDay from "./Calendar";
import { useState } from "react";
import "../styles/CaloriesCounter.css";

function CaloriesCounter() {
  const [state, setState] = useState(null);
  const setCurrentProduct = (data) => {
    setState(data);
  };
  return (
    <div className="counter">
      <Searcher setCurrentProduct={setCurrentProduct} />
      <CarouselDay product={state} />
    </div>
  );
}

export default CaloriesCounter;
