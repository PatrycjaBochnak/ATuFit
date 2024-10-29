import React, { createContext, useState, useContext } from "react";

const CalculatorContext = createContext();

export const CalculatorProvider = ({ children }) => {
  const [result, setResult] = useState(0); 

  return (
    <CalculatorContext.Provider value={{ result, setResult }}>
      {children}
    </CalculatorContext.Provider>
  );
};

export const useCalculator = () => useContext(CalculatorContext);