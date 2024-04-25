import React from "react";
import CalculatorBMR from "./CalculatorBMR";
import CaloriesCounter from "./CaloriesCounter";
import Contact from "./Contact";
import HomePage from "./HomePage";
import AddProduct from "./AddProduct";

const Pages = () => {
  return (
    <>
      <HomePage />
      <CalculatorBMR />
      <CaloriesCounter />
      <AddProduct />
      <Contact />
    </>
  );
};

export default Pages;
