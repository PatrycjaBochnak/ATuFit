import React, { useState } from "react";
import Searcher from "./Searcher";
import CarouselDay from "./Calendar";

interface Product {
  partOfDay: string;
}

function CaloriesCounter() {
  const [state, setState] = useState<Product | null>(null);

  const setCurrentProduct = (data: Product) => {
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
