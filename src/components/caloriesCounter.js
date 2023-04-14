import React from "react";
import Searcher from "./searcher";
import Calendar from "./calendar";
import { useState } from "react";

function CaloriesCounter() {
  const [state, setState] = useState(null);
  const setCurrentProduct = (data) => {
    setState(data);
  };
  return (
    <div className="counter">
      <Searcher setCurrentProduct={setCurrentProduct} />
      <Calendar product={state} />
    </div>
  );
}

export default CaloriesCounter;
