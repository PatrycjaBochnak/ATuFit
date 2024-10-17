import React from "react";
import Cookies from "js-cookie";

const ListResult = ({ props }) => {
  const calories = Cookies.get("finalResult");
  const protein = Cookies.get("protein");
  const carbohydrates = Cookies.get("carbohydrates");
  const fats = Cookies.get("fats");

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
        <div className="flex justify-around mt-2">
          <div className="text-lg font-semibold">
            Total Calories: {props.reduce((n, { calories }) => n + calories, 0)} cal
          </div>
          <div className="text-lg font-semibold">
            Total Fats: {props.reduce((n, { fats }) => n + parseFloat(fats), 0).toFixed(1)} g
          </div>
          <div className="text-lg font-semibold">
            Total Carbs: {props.reduce((n, { carbohydrates }) => n + parseFloat(carbohydrates), 0).toFixed(1)} g
          </div>
          <div className="text-lg font-semibold">
            Total Proteins: {props.reduce((n, { proteins }) => n + parseFloat(proteins), 0).toFixed(1)} g
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListResult;
