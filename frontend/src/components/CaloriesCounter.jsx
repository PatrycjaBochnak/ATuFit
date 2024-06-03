import React from "react";
import Searcher from "../modules/Searcher";
import ListResult from "../modules/ListResult";
import { useState } from "react";
import "../styles/CaloriesCounter.css";

export const CaloriesCounter = () => {

  const [state, setState] = useState([]);
  const setCurrentProduct = (data) => {
    // setState({data});
    setState([...state, data]);

    console.log(state);
  };
  return (
    <div className="counter">
      <h2>Type products and search it</h2>
      <Searcher setCurrentProduct={setCurrentProduct} />
      <h2>lll</h2>
      <ListResult props={state} />
    </div>
  );
}