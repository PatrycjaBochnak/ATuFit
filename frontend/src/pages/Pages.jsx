import React, { useState } from "react";
import CalculatorBMR from "../components/CalculatorBMR";
import Contact from "../components/Contact";
import HomePage from "../components/HomePage";
import AddProduct from "../components/AddProduct";
import Searcher from "../components/Searcher";
import ListResult from "../components/ListResult.jsx"

const Pages = () => {
  const [state, setState] = useState([]);
  const setCurrentProduct = (data) => {
    setState([...state, data]);
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
