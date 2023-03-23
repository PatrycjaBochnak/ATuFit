import React from "react";
import Searcher from "./searcher";
import CarouselDay from "./carouselDay";
import { useState } from "react";

function CaloriesCounter() {
  const [state, setState] = useState(null);
  const setCurrentProduct = (data) => {
    setState(data);
  };
  return (
    <>
      <Searcher setCurrentProduct={setCurrentProduct} />
      <CarouselDay product={state} />
    </>
  );
}

export default CaloriesCounter;
