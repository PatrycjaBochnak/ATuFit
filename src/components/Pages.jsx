import React from "react";
import CalculatorBMR from "./CalculatorBMR";
import CaloriesCounter from "./CaloriesCounter";
import Contact from "./Contact";
import HomePage from "./HomePage";

const Pages = () => {
  return (
    <>
      <HomePage />
      <CalculatorBMR />
      <CaloriesCounter />
      <Contact />
    </>
  );
};

export default Pages;
