import React from "react";
import { useCalculator } from "./CalculatorContext";

const ListResult = ({ props }) => {
  const { result } = useCalculator();
  const { fixedResultNumber, protein, carbohydrates, fats } = result || {};

  const totalCalories = props.reduce((acc, item) => acc + item.calories, 0);
  const totalProteins = props.reduce((acc, item) => acc + item.proteins, 0);
  const totalCarbohydrates = props.reduce((acc, item) => acc + item.carbohydrates, 0);
  const totalFats = props.reduce((acc, item) => acc + item.fats, 0);

  return (
    <div className="daily-results h-screen overflow-y-auto p-8 bg-[#081325] text-white rounded-lg shadow-md flex flex-col items-center">
      <h2 className="text-4xl font-bold mb-6 border-b-4 border-pink-600 text-center">
        Your Daily Calorie Results
      </h2>
      <div className="table-results overflow-y-auto mt-6 max-h-[50vh]">
        <table className="w-[900px] bg-gray-800 mx-auto">
          <thead>
            <tr className="bg-gray-700 text-white border-b border-gray-600">
              <th className="py-4 text-center text-lg">Name</th>
              <th className="py-4 text-center text-lg">Calories</th>
              <th className="py-4 text-center text-lg">Fats (g)</th>
              <th className="py-4 text-center text-lg">Carbs (g)</th>
              <th className="py-4 text-center text-lg">Proteins (g)</th>
            </tr>
          </thead>
          <tbody>
            {props.map((p, index) => (
              <tr
                key={index}
                className="border-b border-gray-600 hover:bg-gray-700 transition duration-300"
              >
                <td className="py-4 text-center font-semibold">{p.name}</td>
                <td className="py-4 text-center">{p.calories} cal</td>
                <td className="py-4 text-center">{parseFloat(p.fats).toFixed(1)} g</td>
                <td className="py-4 text-center">{parseFloat(p.carbohydrates).toFixed(1)} g</td>
                <td className="py-4 text-center">{parseFloat(p.proteins).toFixed(1)} g</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="total-score mt-6 border-t border-gray-600 pt-4">
        <h3 className="text-xl font-bold text-center">Results Summary</h3>
        <div className="flex flex-col items-center mt-2">
          <div className="text-lg font-semibold">
            Total Calories: {totalCalories} cal / {fixedResultNumber || "TDEE not set"} cal
          </div>
          <div className="text-lg font-semibold">
            Total Proteins: {totalProteins.toFixed(1)} g / {protein ? protein.toFixed(1) : "Protein goal not set"} g
          </div>
          <div className="text-lg font-semibold">
            Total Carbohydrates: {totalCarbohydrates.toFixed(1)} g / {carbohydrates ? carbohydrates.toFixed(1) : "Carbs goal not set"} g
          </div>
          <div className="text-lg font-semibold">
            Total Fats: {totalFats.toFixed(1)} g / {fats ? fats.toFixed(1) : "Fats goal not set"} g
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListResult;
