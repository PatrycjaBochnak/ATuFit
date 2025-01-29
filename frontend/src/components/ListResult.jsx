import React from "react";
import { useCalculator } from "./CalculatorContext";

const ListResult = ({ props }) => {
  const { result } = useCalculator();
  const { fixedResultNumber = 0, protein = 0, carbohydrates = 0, fats = 0 } = result || {};

  console.log('Fixed Result Number:', fixedResultNumber);

  const totalCalories = props.reduce((acc, item) => acc + (parseFloat(item.calories) || 0), 0);
  const totalProteins = props.reduce((acc, item) => acc + (parseFloat(item.proteins) || 0), 0);
  const totalCarbohydrates = props.reduce((acc, item) => acc + (parseFloat(item.carbohydrates) || 0), 0);
  const totalFats = props.reduce((acc, item) => acc + (parseFloat(item.fats) || 0), 0);

  return (
    <div className="daily-results min-h-screen p-6 bg-[#081325] text-white rounded-lg shadow-md flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-6 border-b-4 border-pink-600 text-center">Your Daily Calorie Results</h2>
      <div className="table-results overflow-auto max-h-[50vh] w-full">
        <table className="w-full bg-gray-800 rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-700 text-white border-b border-gray-600 text-sm md:text-base">
              <th className="py-3 px-2">Name</th>
              <th className="py-3 px-2">Calories</th>
              <th className="py-3 px-2">Fats (g)</th>
              <th className="py-3 px-2">Carbs (g)</th>
              <th className="py-3 px-2">Proteins (g)</th>
            </tr>
          </thead>
          <tbody>
            {props.map((p, index) => (
              <tr key={index} className="border-b border-gray-600 hover:bg-gray-700 transition duration-200 text-center text-sm md:text-base">
                <td className="py-3 px-2 font-semibold">{p.name}</td>
                <td className="py-3 px-2">{parseFloat(p.calories || 0).toFixed(1)} cal</td>
                <td className="py-3 px-2">{parseFloat(p.fats || 0).toFixed(1)} g</td>
                <td className="py-3 px-2">{parseFloat(p.carbohydrates || 0).toFixed(1)} g</td>
                <td className="py-3 px-2">{parseFloat(p.proteins || 0).toFixed(1)} g</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="total-score mt-6 border-t border-gray-600 pt-4 text-center w-full">
        <h3 className="text-lg font-bold">Results Summary</h3>
        <div className="flex flex-col gap-2 mt-2 text-sm md:text-base">
          <div>Total Calories: {totalCalories.toFixed(1)} cal / {fixedResultNumber || "TDEE not set"} cal</div>
          <div>Total Proteins: {totalProteins.toFixed(1)} g / {protein ? protein.toFixed(1) : "Protein goal not set"} g</div>
          <div>Total Carbohydrates: {totalCarbohydrates.toFixed(1)} g / {carbohydrates ? carbohydrates.toFixed(1) : "Carbs goal not set"} g</div>
          <div>Total Fats: {totalFats.toFixed(1)} g / {fats ? fats.toFixed(1) : "Fats goal not set"} g</div>
        </div>
      </div>
    </div>
  );
};

export default ListResult;
