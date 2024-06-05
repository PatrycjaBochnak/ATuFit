import React, { useState } from "react";
import CalculatorBMR from "./CalculatorBMR";
import Contact from "./Contact";
import HomePage from "./HomePage";
import AddProduct from "./AddProduct";
import Searcher from "./Searcher";
import ListResult from "./ListResult";

const Pages = () => {
  const [state, setState] = useState([]);
  const setCurrentProduct = (data) => {
    setState([...state, data]);
    console.log(state)
  };

  return (
    <>
      <HomePage />
      <CalculatorBMR />
      <Searcher setCurrentProduct={setCurrentProduct} />
      <AddProduct />
      <ListResult props={state} />
      <Contact />
    </>
  );
};

export default Pages;
