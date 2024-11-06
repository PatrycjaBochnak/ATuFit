import React, { createContext, useContext, useState } from 'react';

const CalculatorContext = createContext();

export const CalculatorProvider = ({ children }) => {
  const [result, setResult] = useState(0);
  const [macros, setMacros] = useState({ protein: 0, carbohydrates: 0, fats: 0 });

  return (
    <CalculatorContext.Provider value={{ result, setResult, macros, setMacros }}>
      {children}
    </CalculatorContext.Provider>
  );
};

export const useCalculator = () => useContext(CalculatorContext);
