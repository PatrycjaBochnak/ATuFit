import React from "react";
import Searcher from "./components/searcher";
import CarouselDay from "./Calendar";
import { useState } from "react";

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
