import React from "react";
import Searcher from "./Searcher";
import CarouselDay from "./Calendar";
import { useState } from "react";
import FetchData from "./FetchData";

function CaloriesCounter() {
  const [state, setState] = useState(null);
  const setCurrentProduct = (data) => {
    setState(data);
  };
  return (
    <div className="counter">
      <Searcher setCurrentProduct={setCurrentProduct} />
      <CarouselDay product={state} />
      <FetchData url="http://localhost:3001/hello" />
      <FetchData url="http://localhost:3001/users" />
      <FetchData url="http://localhost:3001/products" />
    </div>
  );
}

export default CaloriesCounter;
