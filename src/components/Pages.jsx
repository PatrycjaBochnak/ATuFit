import React from "react";
import CalculatorBMR from "./CalculatorBMR";
import Calendar from "./Calendar";
import CaloriesCounter from "./CaloriesCounter";
import Contact from "./Contact";
import HomePage from "./HomePage";

const Pages = () => {
  return (
    <>
      <HomePage />
      <CalculatorBMR />
      <CaloriesCounter />
      <Calendar />
      <Contact />
    </>
  );
};

export default Pages;
