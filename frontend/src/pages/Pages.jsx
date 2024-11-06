import React, { useState } from "react";
import CalculatorBMR from "../components/CalculatorBMR";
import Contact from "../components/Contact";
import HomePage from "../components/HomePage";
import AddProduct from "../components/AddProduct";
import Searcher from "../components/Searcher";
import ListResult from "../components/ListResult.jsx";
import { CalculatorProvider } from "../components/CalculatorContext";

const Pages = ({ sr }) => {
  const [state, setState] = useState([]);
  const setCurrentProduct = (data) => {
    setState([...state, data]);
  };

  return (
    <CalculatorProvider>
      <>
        <HomePage sr={sr} />
        <CalculatorBMR sr={sr}/>
        <Searcher setCurrentProduct={setCurrentProduct} sr={sr} />
        <AddProduct sr={sr} />
        <ListResult props={state} sr={sr}/> 
        <Contact sr={sr} />
      </>
    </CalculatorProvider>
  );
};

export default Pages;
